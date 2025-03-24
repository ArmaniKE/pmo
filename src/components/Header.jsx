import React, { useState } from "react";
import { Link } from "react-router-dom";

const languages = [
  { value: "ru", label: "RU" },
  { value: "kz", label: "KZ" },
  { value: "en", label: "EN" },
];

const Header = () => {
  const [selected, setSelected] = useState("RU");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[130px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img className="h-18" src="/header/logo1.svg" />
      </Link>
      <div className="flex text-xl justify-center items-center space-x-20">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("about").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>О нас</div>
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("projects").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>Проекты</div>
        </a>
        <a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("contacts").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>Контакты</div>
        </a>
      </div>
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
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0" />
    </header>
  );
};

export default Header;
