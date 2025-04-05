import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[200px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-6xl font-semibold text-[#002F6C]">
          {t("Услуги и компетенции")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-[50%] flex flex-col justify-between gap-y-10">
          <div className="h-[148px] gap-x-3 bg-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <img src="/services/1.svg" className="w-13" />
            <div className="w-[80%]">
              {t(
                "Разработка и внедрение единых стандартов управления проектами"
              )}
            </div>
          </div>
          <div className="h-[148px] gap-x-3 bg-[#002F6C] text-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <div className="w-[80%]">
              {t("Регистрация авторских прав на собственные разработки КБТУ")}
            </div>
            <img src="/services/3.svg" className="w-12" />
          </div>
          <div className="h-[148px] gap-x-3 bg-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <img src="/services/5.svg" className="w-13" />
            <div className="w-[80%]">
              {t("Обучение проектным подходам при управлении проектами")}
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-between gap-y-8">
          <div className="h-[148px] bg-[#002F6C] text-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <img src="/services/2.svg" className="w-13 mr-6" />
            <div>{t("Реализация внешних проектов под ключ")}</div>
          </div>
          <div className="h-[148px] gap-x-3 bg-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <div className="w-[80%]">
              {t(
                "Управление внутренними проектами и поддержка команд в организации процессов и документации"
              )}
            </div>
            <img src="/services/4.svg" className="w-13 ml-5" />
          </div>
          <div className="h-[148px] gap-x-3 bg-[#002F6C] text-white rounded-3xl flex justify-center items-center p-[40px] text-center font-semibold text-[26px] shadow-xl">
            <img src="/services/6.svg" className="w-13 mr-3" />
            <div>{t("Консалтинг и аудит проектов")}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <img
          className="absolute mt-17 mr-165 w-58"
          src="/services/vector-left.svg"
        />
        <div className="text-[#002F6C] text-5xl font-semibold">
          {t("Подходы к работе")}
        </div>
        <img
          className="absolute mt-17 ml-165 w-58"
          src="/services/vector-right.svg"
        />
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-[50%] rounded-3xl bg-white text-[#002F6C] px-9 py-5 pb-15 shadow-xl">
          <div className="text-center text-3xl font-semibold">
            {t("Классические методологии")}
          </div>
          <img className="w-[100%] px-8 mt-4" src="/services/t-line.svg" />
          <div className="flex flex-row justify-evenly space-x-30 text-3xl font-semibold mt-[-70px]">
            <div>{t("PMBOK")}</div>
            <div>{t("PRINCE2")}</div>
          </div>
        </div>
        <div className="w-[50%] rounded-3xl bg-white text-[#002F6C] px-9 py-5 pb-15 shadow-xl">
          <div className="text-center text-3xl font-semibold">
            {t("Гибкие подходы")}
          </div>
          <img className="w-[100%] px-8 mt-4" src="/services/t-line.svg" />
          <div className="flex flex-row justify-evenly space-x-30 text-3xl font-semibold mt-[-70px]">
            <div>{t("Scrum")}</div>
            <div>{t("Kanban")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
