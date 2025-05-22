
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getGeminiReply(userMessage) {
  const model = genAI.getGenerativeModel({ model:  "gemini-2.0-flash" });

  const result = await model.generateContent(userMessage);
  const response = await result.response;
  const text = response.text();
  return text;
}


