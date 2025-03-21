import React from "react";

const Tools = () => {
  return (
    <div class="mt-[150px] px-[80px] space-y-[40px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">
          Инструменты и технологии
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="border-3 border-[#002F6C] rounded-2xl p-9 ml-10 mr-10">
        <div className="text-xl font-semibold text-[#002F6C]">
          <span className="ml-8">Инструмент</span>
          <span className="ml-45">Описание</span>
          <span className="ml-80">Преимущества</span>
        </div>
        <div className="mt-5">
          <div className="items-center py-5 px-3 flex flex-row justify-between text-lg font-semibold text-[#002F6C]">
            <img src="/tools/jira.svg" className="w-33"/>
            <div className="w-90">Система управления задачами, популярная среди разработчиков</div>
            <div className="w-90">Гибкость, мощные возможности для Agile и Scrum</div>
          </div>
          <div className="items-center py-5 px-3 flex flex-row justify-between text-lg font-semibold text-[#002F6C]">
            <img src="/tools/trello.svg" className="w-33"/>
            <div className="w-90">Доска для управления задачами с карточками</div>
            <div className="w-90">Простота, удобство для небольших команд</div>
          </div>
          <div className="items-center py-5 px-3 flex flex-row justify-between text-lg font-semibold text-[#002F6C]">
            <img src="/tools/asana.svg" className="w-33"/>
            <div className="w-90">Программа для планирования проектов</div>
            <div className="w-90">Подходит для крупных компаний, аналитика и отчеты</div>
          </div>
          <div className="items-center py-5 px-3 flex flex-row justify-between text-lg font-semibold text-[#002F6C]">
            <img src="/tools/ms.svg" className="w-33"/>
            <div className="w-90">Органайзер задач с расширенными возможностями</div>
            <div className="w-90">Интуитивный интерфейс, интеграции с другими сервисами</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
