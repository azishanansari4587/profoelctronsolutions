'use client';
import { useState, useRef, useEffect } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I am Mohammad Zishan Ansari. What can I help you with today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Failed to fetch reply");

      const data = await res.json();
      setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: "bot", text: "❌ Error: " + err.message }]);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

 // Auto-scroll to bottom on new message
 useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const suggestions = ["What is Next.js?", "How does Gemini work?", "Give me a JS tip"];

  return (
    <div className="flex flex-col h-screen p-4">
      {/* Scrollable Chat Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-1 space-y-2 border rounded-md p-2"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded-lg text-sm max-w-xs ${msg.sender === "bot" ? "bg-gray-100 text-left" : "bg-blue-500 text-white ml-auto"}`}>
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="p-2 rounded-lg bg-gray-100 text-sm max-w-xs text-left animate-pulse">
            Typing...
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mt-2">
        {suggestions.map((s, i) => (
          <button
            key={i}
            className="text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full"
            onClick={() => setInput(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex gap-1 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border rounded-md px-3 py-2 text-sm"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
