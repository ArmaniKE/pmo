import React from "react";

const Hero = () => {
  return (
    <div className="px-[80px] mt-[210px] flex">
      <div className="w-[50%] py-10 px-6 flex-col space-y-[40px]">
        <div className="self-stretch justify-start">
          <span class="text-black text-5xl font-semibold">
            Управляем проектами — создаем{" "}
          </span>
          <span class="text-[#002F6C] text-5xl font-semibold">успех</span>
          <span class="text-black text-5xl font-semibold">!</span>
        </div>
        <div className="self-stretch justify-start text-black text-xl font-normal">
          Мы, команда профессионалов, реализуем внутренние и внешние проекты с
          максимальной эффективностью, используя современные подходы проектного
          управления
        </div>
        <div
          data-property-1="Default"
          className="w-56 h-14 p-2.5 bg-[#002F6C] rounded-[20px] inline-flex justify-center items-center gap-2.5 overflow-hidden"
        >
          <div className="text-center justify-start text-white text-xl font-semibold">
            Связаться с нами
          </div>
        </div>
      </div>
      <div className="w-[50%] py-10 px-6">
        <img src="/hero/vid.png"/>
      </div>
    </div>
  );
};

export default Hero;
