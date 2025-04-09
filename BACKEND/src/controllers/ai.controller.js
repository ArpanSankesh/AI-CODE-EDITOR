const generateContent = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const output = await generateContent(prompt);
        res.json({ result: output });
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};
