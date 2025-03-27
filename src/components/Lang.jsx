import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "ru", label: "RU" },
  { value: "kz", label: "KZ" },
  { value: "en", label: "EN" },
];

const Lang = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("RU");
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelected(lang.toUpperCase());
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-24 z-100 mr-[20px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`cursor-pointer border-3 border-[#002F6C] rounded-xl py-[4px] text-[#002F6C] text-[26px] font-semibold flex text-center justify-center items-center ${
          isOpen ? "border-b-0 pb-[6px] rounded-b-none" : "pb-[4px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full bg-[#F2F2F2] border-l-3 border-r-3 border-b-3 border-[#002F6C] rounded-b-xl">
          <div className="cursor-pointer text-[#002F6C] text-[26px] font-semibold border-[#002F6C] text-center flex flex-col justify-center content-center">
            {languages
              .filter((lang) => lang.label !== selected)
              .map((lang) => (
                <div
                  key={lang.value}
                  className="hover:bg-[#e7e7e7] h-12 flex justify-center items-center rounded-xl"
                  onClick={() => changeLanguage(lang.value)}
                >
                  {lang.label}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lang;
