import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Fab = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2 z-1000">
      {isOpen && (
        <a
          href="https://t.me/joinchat/AAAAAFSrQfr3bYvn18oEeQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black text-xl px-6 py-4 rounded-full shadow-md transition"
        >
          <img src="fba/tg.svg" className="h-8" />
          <span>{t("Написать в Telegram")}</span>
        </a>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-[#F2F2F2] bg-[#002F6C] text-white w-19 h-19 rounded-full flex items-center justify-center shadow-md transition"
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={33} />}
      </button>
    </div>
  );
};

export default Fab;
