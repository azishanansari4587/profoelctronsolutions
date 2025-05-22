import { openai } from "@/lib/openAI"

// export async function POST(req) {
//   const { message } = await req.json();

//   const chat = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: "You are a helpful and experienced tech consultant. Give stack advice, timeline, and estimation.",
//       },
//       {
//         role: "user",
//         content: message,
//       },
//     ],
//   });

//   return Response.json({ reply: chat.choices[0].message.content });
// }


// export async function POST(req) {
//     try {
//       const { message } = await req.json();
  
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: message }],
//       });
  
//       const reply = completion.choices[0].message.content;
//       return Response.json({ reply });
//     } catch (err) {
//       console.error("API Error:", err);
//       return new Response(JSON.stringify({ error: "Internal error" }), {
//         status: 500,
//       });
//     }
//   }

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
