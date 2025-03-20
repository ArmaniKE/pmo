import React from "react";

const Services = () => {
  return (
    <div class="mt-[150px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-4 border-[#002F6C] flex-grow" />
        <span className="text-5xl font-semibold text-[#002F6C]">
          Услуги и компетенции
        </span>
        <div className="border-t-4 border-[#002F6C] flex-grow" />
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-[50%] flex flex-col justify-between space-y-10">
          <div className="h-[170px] bg-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <img src="/services/1.svg" className="w-13" />
            <div>
              Разработка и внедрение единых стандартов управления проектами
            </div>
          </div>
          <div className="h-[170px] bg-[#002F6C] text-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <div>Регистрация авторских прав на собственные разработки КБТУ</div>
            <img src="/services/3.svg" className="w-13" />
          </div>
          <div className="h-[170px] bg-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <img src="/services/5.svg" className="w-13" />
            <div>Обучение проектным подходам при управлении проектами</div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-between space-y-5">
          <div className="h-[170px] bg-[#002F6C] text-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <img src="/services/2.svg" className="w-12 mr-6" />
            <div>Реализация внешних проектов под ключ</div>
          </div>
          <div className="h-[170px] bg-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <div>
              Управление внутренними проектами и поддержка команд в организации
              процессов и документации
            </div>
            <img src="/services/4.svg" className="w-18 ml-5" />
          </div>
          <div className="h-[170px] bg-[#002F6C] text-white rounded-2xl flex justify-center items-center p-[80px] text-center font-semibold text-xl shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.10)]">
            <img src="/services/6.svg" className="w-11 mr-6"/>
            <div>Консалтинг и аудит проектов</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <img
          className="absolute mt-14 mr-130 h-15 w-40"
          src="/services/vector-left.svg"
        />
        <div className="h-fit text-[#002F6C] text-4xl font-semibold">
          Подходы к работе
        </div>
        <img
          className="absolute mt-14 ml-130 h-15 w-40"
          src="/services/vector-right.svg"
        />
      </div>
      <div className="flex flex-row justify-between space-x-10">
        <div className="w-[50%] rounded-2xl bg-white text-[#002F6C] px-10 py-5 pb-11 shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.05)]">
          <div className="text-center text-2xl font-semibold">
            Классические методологии
          </div>
          <img className="w-full mt-3" src="/services/t-line.svg" />
          <div className="flex flex-row justify-evenly space-x-30 text-2xl font-semibold mt-[-80px]">
            <div>PMBOK</div>
            <div>PRINCE2</div>
          </div>
        </div>
        <div className="w-[50%] rounded-2xl bg-white text-[#002F6C] px-10 py-5 pb-11 shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.05)]">
          <div className="text-center text-2xl font-semibold">
            Гибкие подходы
          </div>
          <img className="w-full mt-3" src="/services/t-line.svg" />
          <div className="flex flex-row justify-evenly space-x-30 text-2xl font-semibold mt-[-80px]">
            <div>Scrum</div>
            <div>Kanban</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
