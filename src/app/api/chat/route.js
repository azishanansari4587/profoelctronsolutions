import { openai } from "@/lib/openAI"

// app/api/chat/route.js
import { getGeminiReply } from "@/lib/openAI";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const reply = await getGeminiReply(message);
    return Response.json({ reply });
  } catch (err) {
    console.error("Gemini Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
