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

const delay = () => new Promise((res) => global.setTimeout(res, 1000));

app.post("/save", async (req, res) => {
  // Save
})

app.get("/load", async (req, res) => {
  // Load
})

app.listen(5555, () => console.log("Listening on port 5555"));
