import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full h-[150px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <img className="h-20" src="/header/logo1.svg"/>
      <div className="flex text-2xl justify-center items-center space-x-[80px]">
        <div>О нас</div>
        <div>Проекты</div>
        <div>Контакты</div>
      </div>
      <div className="border-4 mr-[20px] text-xl text-[#002F6C] font-semibold flex justify-center items-center w-20 h-10 rounded-xl border-[#002F6C]">
        RU
      </div>
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0"/>
    </div>
  );
};

export default Header;