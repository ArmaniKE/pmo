import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[130px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}  >
        <img className="h-18" src="/header/logo1.svg" />
      </Link>
      <div className="flex text-xl justify-center items-center space-x-20">
        <div>О нас</div>
        <div>Проекты</div>
        <div>Контакты</div>
      </div>
      <div className="border-3 mr-[20px] text-lg text-[#002F6C] font-semibold flex justify-center items-center w-18 h-8 rounded-lg border-[#002F6C]">
        RU
      </div>
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0" />
    </header>
  );
};

export default Header;
