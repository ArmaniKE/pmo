import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-[200px] px-[80px] bg-[#002F6C] text-white">
      <div className="flex flex-row justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className="h-18" src="/header/logo2.svg" />
        </Link>
        <div className="flex flex-row h-6 space-x-4 mt-[20px] pr-[20px]">
          <a href="https://www.instagram.com/kbtu_official/" target="_blank">
            <img src="/footer/ig.svg" />
          </a>
          <a
            href="https://t.me/joinchat/AAAAAFSrQfr3bYvn18oEeQ"
            target="_blank"
          >
            <img src="/footer/tg.svg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMRF1_QzLIRx5E9wv-a-vCw"
            target="_blank"
          >
            <img src="/footer/yt.svg" />
          </a>
          <a
            href="https://www.facebook.com/groups/kbtuofficialgroup/"
            target="_blank"
          >
            <img src="/footer/fb.svg" />
          </a>
          <a href="https://vk.com/kbtu_group" target="_blank">
            <img src="/footer/vk.svg" />
          </a>
        </div>
      </div>
      <div className="flex text-xl font-semibold justify-center items-center space-x-20 mt-[-30px]">
        <div>О нас</div>
        <div>Проекты</div>
        <div>Контакты</div>
      </div>
      <div className="border-t-1 border-white py-2 flex gap-x-1 text-sm justify-center mt-11 text-[#D0D0D0]">
        <a href="" target="_blank">
          <img src="/footer/copy.svg" />
        </a>
        2025 | Казахстанско-Британский Технический Университет | All rights
        reserved ®
      </div>
    </footer>
  );
};

export default Footer;
