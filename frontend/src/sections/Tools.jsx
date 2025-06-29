import React from "react";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[200px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-6xl font-semibold text-[#002F6C]">
          {t("Инструменты и технологии")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="border-3 border-[#002F6C] rounded-2xl p-15 ml-10 mr-10">
        <div className="text-3xl font-semibold text-[#002F6C]">
          <span className="ml-[3%]">{t("Инструмент")}</span>
          <span className="ml-[18%]">{t("Описание")}</span>
          <span className="ml-[33%]">{t("Преимущества")}</span>
        </div>
        <div className="mt-10">
          <div className="items-center py-6 px-3 flex flex-row justify-between text-[26px] font-semibold text-[#002F6C]">
            <a href="https://www.atlassian.com/software/jira" target="_blank">
              <img src="/tools/jira.svg" className="w-44" />
            </a>
            <div className="w-[35%]">
              {t("Система управления задачами, популярная среди разработчиков")}
            </div>
            <div className="w-[35%]">
              {t("Гибкость, мощные возможности для Agile и Scrum")}
            </div>
          </div>
          <div className="items-center py-6 px-3 flex flex-row justify-between text-[26px] font-semibold text-[#002F6C]">
            <a href="https://trello.com/ru" target="_blank">
              <img src="/tools/trello.svg" className="w-44" />
            </a>
            <div className="w-[35%]">
              {t("Доска для управления задачами с карточками")}
            </div>
            <div className="w-[35%]">
              {t("Простота, удобство для небольших команд")}
            </div>
          </div>
          <div className="items-center py-6 px-3 flex flex-row justify-between text-[26px] font-semibold text-[#002F6C]">
            <a href="https://asana.com/ru" target="_blank">
              <img src="/tools/asana.svg" className="w-44" />
            </a>
            <div className="w-[35%]">
              {t("Программа для планирования проектов")}
            </div>
            <div className="w-[35%]">
              {t("Подходит для крупных компаний, аналитика и отчеты")}
            </div>
          </div>
          <div className="items-center pt-6 px-3 flex flex-row justify-between text-[26px] font-semibold text-[#002F6C]">
            <a
              href="https://www.microsoft.com/ru-ru/microsoft-365/planner/microsoft-project?market=ru"
              target="_blank"
            >
              <img src="/tools/ms.svg" className="w-44" />
            </a>
            <div className="w-[35%]">
              {t("Органайзер задач с расширенными возможностями")}
            </div>
            <div className="w-[35%]">
              {t("Интуитивный интерфейс, интеграции с другими сервисами")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
