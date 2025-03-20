import React from "react";

const Hero = () => {
  return (
    <div className="px-[80px] mt-[150px] flex">
      <div className="w-[50%] py-10 px-6 flex-col content-center space-y-[30px]">
        <div  className="leading-10">
          <span className="text-black text-[64px] font-semibold">Управляем проектами — создаем </span>
          <span className="text-[#002F6C] text-[64px] font-semibold">успех</span>
          <span className="text-black text-[64px] font-semibold">!</span>
        </div>
        <div className="text-black text-lg font-normal leading-6">
          Мы, команда профессионалов, реализуем внутренние и внешние проекты с
          максимальной эффективностью, используя современные подходы проектного
          управления
        </div>
        <div
          data-property-1="Default"
          className="w-50 h-13 p-2 bg-[#002F6C] rounded-xl inline-flex justify-center items-center overflow-hidden"
        >
          <div className="text-center text-white text-lg font-semibold">
            Связаться с нами
          </div>
        </div>
      </div>
      <div className="w-[55%] py-10 px-6">
        <img src="/hero/vid.png" />
      </div>
    </div>
  );
};

export default Hero;
