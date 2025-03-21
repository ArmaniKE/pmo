import React from "react";

const Projects = () => {
  return (
    <div class="mt-[150px] px-[80px] space-y-[40px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">
          Наши проекты
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      {/* <div className="flex px-10 space-x-6">
        <div className="border-4 h-fit border-[#002F6C] p-4 rounded-2xl text-center flex items-center justify-center text-[#002F6C] text-[38px] font-semibold">
          Аналитическая цифровая платформа <br/> «Умная ферма» ​
        </div>
        <img src="/projects/arrow-right.svg" className="border w-20 h-fit mt-10"/>
        <div className="border-4 border-[#002F6C] p-8 flex rounded-2xl">
          <img src="/projects/ferma/1.svg" className="z-1 h-35"/>
          <img src="/projects/ferma/2.svg" className="h-35 ml-[-120px] mt-16"/>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
