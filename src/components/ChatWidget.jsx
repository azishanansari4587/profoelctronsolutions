'use client';
import { useState } from "react";
import ChatBox from "./ChatBox";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="shadow-xl rounded-lg bg-white border w-80 h-[36rem] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-3 py-2 border-b bg-gradient-to-br from-blue-700 to-blue-500 text-white text-sm font-medium">
            <span>💬 Profoelctron Solutions</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-red-300">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Chat UI */}
          <ChatBox />
        </div>
      ) : (
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
