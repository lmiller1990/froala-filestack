import Express, { Router } from "express";
import cors from "cors";
import { postFile } from "./filestack.js";
import bodyParser from "body-parser";

const app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const router = Router();
app.use(router);

const delay = () => new Promise((res) => global.setTimeout(res, 1000));

let html = "";

app.post("/save", async (req, res) => {
  // Save
  html = req.body.body;
  res.status(204);
  res.end();
});

app.get("/load", async (req, res) => {
  // Load
  await delay();
  res.json({ html });
});

import multer from "multer";

const upload = multer();

router.post("/image", upload.single("file"), async (req, res) => {
  const { link } = await postFile(req.file.buffer);
  res.json({ link });
});

app.listen(5555, () => console.log("Listening on port 5555"));
