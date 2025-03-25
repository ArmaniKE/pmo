import React from "react";
import { useTranslation } from "react-i18next";

const WorkProcess = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[200px] px-[80px] space-y-[40px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">
          {t("Как мы работаем")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="border-3 border-[#002F6C] rounded-2xl flex justify-center ml-10 mr-10 bg-white shadow-md">
        <img src="/workprocess/scheme.svg" className="w-full px-8 mt-6" />
      </div>
    </div>
  );
};

export default WorkProcess;
