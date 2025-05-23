'use client';
import dynamic from "next/dynamic";
const ChatBox = dynamic(() => import("@/components/ChatBox"), { ssr: false });

export default function Chatbot() {
  return (
    <div className="py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tech Consultancy Chatbot</h1>
      <ChatBox />
      {/* <script src="//code.tidio.co/bdrsgtf7c1jujevxdvinelfgppx4aigi.js" async></script> */}
    </div>
  );
}
