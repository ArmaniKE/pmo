import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-[200px] px-[80px] bg-[#002F6C] text-white">
      <div className="flex flex-row justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/header/logo2.svg"/>
        </Link>
        <div className="flex flex-row h-fit space-x-6 mt-[20px] pr-[20px]">
          <a href="https://www.instagram.com/kbtu_official/" target="_blank">
            <img src="/footer/ig.svg" className="h-9"/>
          </a>
          <a
            href="https://t.me/joinchat/AAAAAFSrQfr3bYvn18oEeQ"
            target="_blank"
          >
            <img src="/footer/tg.svg" className="h-9"/>
          </a>
          <a
            href="https://www.youtube.com/channel/UCMRF1_QzLIRx5E9wv-a-vCw"
            target="_blank"
          >
            <img src="/footer/yt.svg" className="h-9"/>
          </a>
          <a
            href="https://www.facebook.com/groups/kbtuofficialgroup/"
            target="_blank"
          >
            <img src="/footer/fb.svg" className="h-9"/>
          </a>
          <a href="https://vk.com/kbtu_group" target="_blank">
            <img src="/footer/vk.svg" className="h-9"/>
          </a>
        </div>
      </div>
      <div className="flex text-[28px] font-semibold justify-center items-center space-x-20 mt-[-30px]">
        <Link
          to="/about"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("about").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>{t("О нас")}</div>
        </Link>
        <Link
          to="/projects"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("projects").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>{t("Проекты")}</div>
        </Link>
        <Link
          to="/contacts"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("contacts").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>{t("Контакты")}</div>
        </Link>
      </div>
      <div className="border-t-1 border-white py-4 flex gap-x-2 text-lg justify-center mt-15 text-[#D0D0D0]">
        <img src="/footer/copy.svg"/>
        {t(
          "2025 | Казахстанско-Британский Технический Университет | All rights reserved ®"
        )}
      </div>
    </footer>
  );
};

export default Footer;
