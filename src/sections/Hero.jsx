import React, { useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  const mouseEnter = () => {
    videoRef.current.play();
  };

  const mouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div className="px-[80px] mt-[150px] flex">
      <div className="w-[50%] px-6 flex-col content-center space-y-[40px]">
        <div className="leading-6">
          <span className="text-black text-5xl font-semibold">
            Управляем проектами — создаем{" "}
          </span>
          <span className="text-[#002F6C] text-5xl font-semibold">успех</span>
          <span className="text-black text-5xl font-semibold">!</span>
        </div>
        <div className="text-black text-md font-normal leading-6">
          Мы, команда профессионалов, реализуем внутренние и внешние проекты с
          максимальной эффективностью, используя современные подходы проектного
          управления
        </div>
        <div className="w-48 h-11 p-2 bg-[#002F6C] rounded-lg inline-flex justify-center items-center overflow-hidden">
          <button className="text-center text-white text-md font-semibold cursor-pointer">
            Связаться с нами
          </button>
        </div>
      </div>
      <div className="w-[50%] p-8 flex justify-center">
        <video
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          autoPlay
          loop
          playsInline
          muted
          className="rounded-2xl shadow-xl w-150"
        >
          <source src="hero/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
