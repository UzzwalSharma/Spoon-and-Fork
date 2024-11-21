import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCB9fMCYZYNth2WBEWPQmVsYz9pVjuovBU";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to clean up unwanted characters
const cleanResponse = (text) => text.replace(/[^\w\s.,!?]/g, '');

async function sendChatMessage(inputMessage) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(inputMessage);
    return cleanResponse(result.response.text());
  } catch (error) {
    console.error("Error interacting with Gemini API:", error);
    return "Error generating response.";
  }
}

export default sendChatMessage;