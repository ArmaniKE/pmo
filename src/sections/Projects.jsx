import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="mt-[200px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">
          Наши проекты
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="flex">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl h-fit p-3 text-center flex items-center justify-center text-[#002F6C] text-[38px] font-semibold">
          Аналитическая цифровая платформа «Умная ферма» ​
        </div>
        <img
          className="w-[8%] h-fit mt-[3.5%]"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl p-4 py-8 flex justify-center">
          <img src="/projects/ferma/1.svg" className="z-1 h-35" />
          <img src="/projects/ferma/2.svg" className="h-35 ml-[-80px] mt-16" />
        </div>
      </div>
      <div className="flex items-end mt-[-200px]">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl p-4 py-8 flex justify-center items-end ">
          <img src="/projects/nav/1.svg" className="h-50 mr-[-20px]" />
          <img src="/projects/nav/2.svg" className="z-1 h-40" />
          <img src="/projects/nav/3.svg" className="h-50 ml-[-20px]" />
        </div>
        <img
          className="w-[8%] h-fit mb-[3.5%] rotate-180"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl p-3 text-center flex items-center text-[#002F6C] text-[38px] font-semibold">
          Система ориентации (навигации) в здании КБТУ
        </div>
      </div>
      <div className="flex mt-19">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl h-fit p-3 text-center flex items-center justify-center text-[#002F6C] text-[38px] font-semibold">
          Разработка “Цифровой платформы прослеживания семян”
        </div>
        <img
          className="w-[8%] h-fit mt-[3.5%]"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl px-4 py-8 flex justify-center">
          <img src="/projects/seeds/1.svg" className="h-35 w-80" />
          <img
            src="/projects/seeds/2.svg"
            className="h-35 z-1 ml-[-260px] mt-30"
          />
        </div>
      </div>
      <div className="flex items-end mt-[-280px]">
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl flex justify-center px-10 py-13">
          <img src="/projects/hack/1.svg" className="h-55" />
        </div>
        <img
          className="w-[8%] h-fit mb-[3.5%] rotate-180"
          src="/projects/arrow-right.svg"
        />
        <div className="border-4 w-[50%] border-[#002F6C] rounded-2xl p-3 text-center flex items-center text-[#002F6C] text-[38px] font-semibold">
          Онлайн курс и хакатон по геймификации в партнёрстве ЮНИСЕФ
        </div>
      </div>
      <button
        className="border-4 border-[#002F6C] hover:bg-[#002F6C] hover:text-white rounded-2xl py-4 px-18 text-[#002F6C] text-xl font-semibold cursor-pointer transition-colors duration-300"
        onClick={() => navigate("/projects")}
      >
        Подробнее
      </button>
    </div>
  );
};

export default Projects;
