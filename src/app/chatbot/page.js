'use client';
import dynamic from "next/dynamic";
const ChatBox = dynamic(() => import("@/components/ChatBox"), { ssr: false });

export default function Chatbot() {
  return (
    <div className="py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tech Consultancy Chatbot</h1>
      <ChatBox />
    </div>
  );
}
