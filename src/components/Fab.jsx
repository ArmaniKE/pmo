import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const Fab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { name: "Aida", message: "Hi! I'm your AI assistant. How can I help you today?", isUser: false }
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    setMessages([...messages, { 
      name: "User", 
      message: inputMessage, 
      isUser: true 
    }]);
    setInputMessage("");
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage }),
      });
  
      const data = await response.json();
      setMessages(prev => [...prev, {
        name: "Gemini",
        message: data.answer,
        isUser: false
      }]);
      
    } catch (error) {
      setMessages(prev => [...prev, {
        name: "System",
        message: "Connection error. Please try again.",
        isUser: false
      }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2 z-[1000]">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col border border-gray-200">
          <div className="bg-[#002F6C] text-white p-3 rounded-t-lg flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
              <MessageSquare size={16} className="text-[#002F6C]" />
            </div>
            <div>
              <h4 className="font-semibold">AI Assistant</h4>
              <p className="text-xs opacity-80">Online</p>
            </div>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${msg.isUser ? "bg-[#002F6C] text-white" : "bg-gray-100"}`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002F6C]"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#002F6C] text-white rounded-r-full px-4 flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-[#F2F2F2] bg-[#002F6C] text-white w-18 h-18 rounded-full flex items-center justify-center shadow-md transition hover:bg-[#00408F]"
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
      </button>
    </div>
  );
};

export default Fab;