import React from "react";

const Hero = () => {
  return (
    <div className="px-[80px] mt-[150px] flex">
      <div className="w-[50%] px-6 flex-col content-center space-y-[40px]">
        <div className="leading-6">
          <span className="text-black text-5xl font-semibold">Управляем проектами — создаем </span>
          <span className="text-[#002F6C] text-5xl font-semibold">успех</span>
          <span className="text-black text-5xl font-semibold">!</span>
        </div>
        <div className="text-black text-md font-normal leading-6">
          Мы, команда профессионалов, реализуем внутренние и внешние проекты с
          максимальной эффективностью, используя современные подходы проектного
          управления
        </div>
        <div
          data-property-1="Default"
          className="w-48 h-11 p-2 bg-[#002F6C] rounded-lg inline-flex justify-center items-center overflow-hidden"
        >
          <div className="text-center text-white text-md font-semibold">
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
