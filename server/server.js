import Express, { Router } from "express";
import cors from "cors";
import { postFile } from "./filestack.js";
import bodyParser from "body-parser";
import multer from "multer";

const app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const router = Router();
app.use(router);

let html = "";

const upload = multer();

const delay = () => new Promise((res) => global.setTimeout(res, 1000));

router.post("/save", async (req, res) => {
  const { body } = req.body;
  html = body;
  res.status(200);
  res.end();
});

router.get("/load", async (req, res) => {
  await delay()
  res.json({ html });
});

router.post("/image", upload.single("file"), async (req, res) => {
  const { link } = await postFile(req.file.buffer);
  res.json({ link });
});

router.post("/image", upload.single("file"), async (req, res) => {
  const { link } = await postFile(req.file.buffer);
  res.json({ link });
});

app.listen(5555, () => console.log("Listening on port 5555"));
