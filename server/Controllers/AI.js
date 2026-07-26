const { geminichatSession } = require("../utils/gemini");

// Generic AI text-generation endpoint.
// Frontend sends: { prompt: "..." }
// Response: { success, result }
const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
            return res.status(400).json({
                success: false,
                message: "prompt is required",
            });
        }

        const result = await geminichatSession.sendMessage(prompt);
        const text = result.response.text();

        return res.status(200).json({
            success: true,
            message: "Content generated successfully",
            result: text,
        });
    } catch (error) {
        console.log("Gemini generation error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to generate content",
            error: error.message,
        });
    }
};

module.exports = { generateContent };
