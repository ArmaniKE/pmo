import React, { useState } from "react";

const languages = [
  { value: "ru", label: "RU" },
  { value: "kz", label: "KZ" },
  { value: "en", label: "EN" },
];

const Lang = () => {
  const [selected, setSelected] = useState("RU");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative w-18 z-100 mr-[20px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`cursor-pointer border-3 border-[#002F6C] rounded-lg py-[6px] text-[#002F6C] text-md font-semibold flex justify-center items-center ${
          isOpen ? "border-b-0 pb-[10px] rounded-b-none" : "pb-[6px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full bg-[#F2F2F2] border-l-3 border-r-3 border-b-3 border-[#002F6C] rounded-b-lg">
          <div className="cursor-pointer text-[#002F6C] font-semibold border-[#002F6C] text-center flex flex-col justify-center content-center">
            {languages
              .filter((lang) => lang.label !== selected)
              .map((lang) => (
                <div
                  key={lang.value}
                  className="hover:bg-[#e7e7e7] h-9 flex justify-center items-center rounded-md"
                  onClick={() => {
                    setSelected(lang.label);
                    setIsOpen(false);
                  }}
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
