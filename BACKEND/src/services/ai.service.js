const {GoogleGenerativeAI} = require('@google/genai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY                                                          );
const model = genAI.model({model :'gemini-2.0-flash'});

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent