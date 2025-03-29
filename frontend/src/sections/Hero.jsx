import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const videoRef = useRef(null);
  const mouseEnter = () => {
    videoRef.current.play();
  };
  const mouseLeave = () => {
    videoRef.current.pause();
  };
  const { t } = useTranslation();
  return (
    <div className="px-[80px] mt-[200px] flex">
      <div className="w-[50%] p-8 flex-col content-center space-y-[40px]">
        <div className="leading-8">
          <span className="text-black text-6xl font-semibold">
            {t("Управляем проектами — создаем")}{" "}
          </span>
          <span className="text-[#002F6C] text-6xl font-semibold">{t("успех")}</span>
          <span className="text-black text-6xl font-semibold">!</span>
        </div>
        <div className="text-black text-[24px] font-normal leading-8">
          {t("Мы, команда профессионалов, реализуем внутренние и внешние проекты с максимальной эффективностью, используя современные подходы проектного управления")}
        </div>
        <button className="group relative flex items-center justify-center w-[260px] px-6 py-4 bg-[#002F6C] hover:bg-[#002F7C] text-white text-2xl font-semibold rounded-xl transition-all duration-300 overflow-hidden cursor-pointer">
          <span className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-[-10px]">
            {t("Связаться с нами")}
          </span>
          <span className="absolute flex items-center gap-2 opacity-0 translate-x-2 scale-100 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100">
            <img
              src="/hero/arrow.svg" 
              className="w-4 h-4 transition-all duration-300 ml-50"
            />
          </span>
        </button>
      </div>
      <div className="w-[50%] p-8 flex justify-end">
        <video
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          autoPlay
          loop
          playsInline
          muted
          className="rounded-3xl shadow-xl w-190"
        >
          <source src="hero/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
