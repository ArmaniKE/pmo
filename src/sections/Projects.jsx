import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div id="projects" className="mt-[200px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-6xl font-semibold text-[#002F6C]">
          {t("Наши проекты")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="flex">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl h-fit p-6 text-center flex items-center justify-center text-[#002F6C] text-[38px] font-semibold">
          {t("Аналитическая цифровая платформа «Умная ферма»")}
        </div>
        <img
          className="w-[8%] h-fit mt-[3.5%]"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl py-8 flex justify-center">
          <img src="/projects/ferma2.svg" className="h-85"/>
        </div>
      </div>
      <div className="flex items-end mt-[-180px]">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl py-8 flex justify-center items-end ">
          <img src="/projects/nav2.svg" className="h-85" />
        </div>
        <img
          className="w-[8%] h-fit mb-[3.5%] rotate-180"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl py-6 px-13 text-center flex items-center text-[#002F6C] text-[38px] font-semibold">
          {t("Система ориентации (навигации) в здании КБТУ")}
        </div>
      </div>
      <div className="flex mt-31">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl h-fit py-6 text-center flex items-center justify-center text-[#002F6C] text-[38px] font-semibold">
          {t("Разработка “Цифровой платформы прослеживания семян”")}
        </div>
        <img
          className="w-[8%] h-fit mt-[3.5%]"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl px-4 py-8 flex justify-center">
          <img src="/projects/seeds.svg" className="h-90" />
        </div>
      </div>
      <div className="flex items-end mt-[-200px]">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl flex justify-center content-center">
          <img src="/projects/hack.svg" className="mt-10 px-8 py-4" />
        </div>
        <img
          className="w-[8%] h-fit mb-[3.5%] rotate-180"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl py-6 text-center flex items-center text-[#002F6C] text-[38px] font-semibold">
          {t("Онлайн курс и хакатон по геймификации в партнёрстве ЮНИСЕФ")}
        </div>
      </div>
      <button
        className="border-4 border-[#002F6C] hover:bg-[#002F6C] hover:text-white rounded-2xl py-5 px-20 text-[#002F6C] text-3xl font-semibold cursor-pointer transition-colors duration-300"
        onClick={() => navigate("/projects")}
      >
        {t("Подробнее")}
      </button>
    </div>
  );
};

export default Projects;
