import { GoogleGenAI } from "@google/genai";

const genAi = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY }); 
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash", })

async function generateContent(prompt){
    const result = await model.generateContent(prompt)
    return result.respomse.text();
}

module.exports = generateContent;