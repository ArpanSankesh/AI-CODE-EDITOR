const { GoogleGenAI } = require("@google/genai");

const genAi = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function generateContent(prompt) {
        const result = await genAi.generate({
            model: "gemini-2.0-flash",
            prompt: prompt,
        });
        return result.text; // Adjust based on the actual response structure
}

module.exports = generateContent;