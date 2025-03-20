import React from "react";

const Projects = () => {
  return (
    <div class="mt-[150px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-[64px] font-semibold text-[#002F6C]">
          Наши проекты
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="flex gap-15">
        <div className="border-4 border-[#002F6C] w-[52%] max-h-30 p-5 rounded-2xl self-stretch text-center justify-start text-[#002F6C] text-3xl font-semibold">
          Аналитическая цифровая платформа «Умная ферма» ​
        </div>
        <div className="border-4 w-[48%] p-10 border-[#002F6C] rounded-2xl">
          pic1
        </div>
      </div>
    </div>
  );
};

export default Projects;
