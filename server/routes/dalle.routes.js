import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const open_ai = new OpenAI({
  key: process.env.OPEN_AI_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello From DALL.E Routes!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { aiPrompt } = req.body;
    const response = await open_ai.images.generate({
      aiPrompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log(response.data);

    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong!" });
  }
});

export default router;
