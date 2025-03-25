import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const Fab = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-2 z-1000">
      {isOpen && (
        <a
          href="https://t.me/joinchat/AAAAAFSrQfr3bYvn18oEeQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black text-sm px-4 py-2 rounded-full shadow-md transition"
        >
          <img src="fba/tg.svg" className="h-5" />
          <span>Написать в Telegram</span>
        </a>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-[#F2F2F2] bg-[#002F6C] text-white w-13 h-13 rounded-full flex items-center justify-center shadow-md transition"
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
      </button>
    </div>
  );
};

export default Fab;
