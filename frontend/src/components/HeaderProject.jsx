import React from "react";
import { Link } from "react-router-dom";
import Lang from "./Lang";
import { useTranslation } from "react-i18next";

const HeaderProject = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[130px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img className="h-15 ml-[20px]" src="/header/logo3.svg" />
        </Link>
      <div className="text-4xl text-[#002F6C] mr-30 text-center font-semibold">
        {t("Наши проекты")}
      </div>
      <Lang />
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0" />
    </header>
  );
};

export default HeaderProject;
