
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Note: a single shared chat session is reused across all requests/users.
// That's fine for stateless single-turn prompts (as this app uses it),
// but it means history keeps growing and isn't per-user. If you need
// per-user context later, create a new session per request instead.
const geminichatSession = model.startChat({
  generationConfig,
  history: [],
});

module.exports = { geminichatSession };
