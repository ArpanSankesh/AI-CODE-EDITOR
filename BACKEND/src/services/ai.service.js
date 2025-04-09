import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash", // or "gemini-1.5-pro"
    contents: prompt,
  });

  return response.text();
}

export default generateContent;
