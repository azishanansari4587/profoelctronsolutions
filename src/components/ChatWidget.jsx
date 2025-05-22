'use client';
import { useState } from "react";
import ChatBox from "./ChatBox"; // import the chatbox here
import { MessageCircle, X } from "lucide-react"; // optional icon

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-2 shadow-xl rounded-lg bg-white border w-80 max-h-[36rem] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center px-3 py-2 border-b bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white  text-sm font-medium">
            <span>💬 Profoelctron Solutions</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-red-300 text-lg">
              {/* ✖ */}
              <X className="w-4 h-4"/>
            </button>
          </div>
          <ChatBox />
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
