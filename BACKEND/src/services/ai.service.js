const { GoogleGenAI } = require("@google/genai");

const genAi = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function generateContent(prompt) {
    try {
        const result = await genAi.predict({
            model: "gemini-2.0-flash",
            prompt: prompt,
        });
        return result.text; // Adjust based on the actual response structure
    } catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
}

module.exports = generateContent;