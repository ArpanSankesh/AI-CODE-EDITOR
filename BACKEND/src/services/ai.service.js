const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });

async function generateContent(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-pro" etc.

        const result = await model.generateContent(prompt);

        const response = await result.response;
        return response.text(); // Get the actual generated text
    } catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
}

module.exports = generateContent;
