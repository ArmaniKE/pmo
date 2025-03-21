import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[150px] px-[80px] bg-[#002F6C] text-white">
      <div className="flex flex-row justify-between">
        <img className="h-18" src="/header/logo2.svg" />
        <div className="flex flex-row h-6 space-x-4 mt-[20px] pr-[20px]">
          <img src="/footer/ig.svg" />
          <img src="/footer/tg.svg" />
          <img src="/footer/yt.svg" />
          <img src="/footer/fb.svg" />
          <img src="/footer/vk.svg" />
        </div>
      </div>
      <div className="flex text-xl font-semibold justify-center items-center space-x-20 mt-[-30px]">
        <div>О нас</div>
        <div>Проекты</div>
        <div>Контакты</div>
      </div>
      <div className="border-t-1 border-white py-2 flex gap-x-1 text-sm justify-center mt-11 text-[#D0D0D0]">
        <img src="/footer/copy.svg"/>
        2025  |  Казахстанско-Британский Технический Университет  |  All rights reserved ®
      </div>
    </footer>
  );
};

export default Footer;
