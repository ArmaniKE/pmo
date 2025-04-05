import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="mt-[130px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-6xl font-semibold text-[#002F6C]">
          {t("О нас")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="w-full py-9 px-12 bg-[#002F6C] rounded-[20px] shadow-xl">
        <div className="text-center text-white text-3xl leading-10">
          <span className="font-semibold">{t("Проектный офис КБТУ")} </span>
          <span className="font-normal">
            {t(
              "основанный в 2022 году, был создан как внутреннее подразделение университета с целью внедрения и продвижения современных практик и подходов проектного управления в его деятельности."
            )}
          </span>
        </div>
      </div>
      <div className="w-full p-[40px] bg-white rounded-[20px] shadow-xl inline-flex flex-col gap-8">
        <div className="text-black text-5xl font-semibold">
          {t("Наша миссия")}
        </div>
        <div className="outline-1 outline-[#002F6C]" />
        <div className="text-black text-[28px] font-normal">
          {t(
            "Создавать и развивать проектную культуру в университете, внедряя передовые методы управления, способствующие устойчивому развитию и укреплению позиций вуза в образовательной и научной сферах."
          )}
        </div>
        <div className="text-black text-[28px] font-normal">
          {t(
            "Выступать центром компетенций в области проектного управления, поддерживая и развивая внутренние и внешние инициативы университета."
          )}
        </div>
      </div>
      <div className="w-full p-[40px] bg-white rounded-[20px] shadow-xl inline-flex flex-col gap-8">
        <div className="w-full text-black text-5xl font-semibold">
          {t("Наши цели")}
        </div>
        <div className="outline-1 outline-[#002F6C]" />
        <div className="w-full h-5 text-black text-3xl font-semibold">
          {t("Унификация процессов и повышение прозрачности")}
        </div>
        <div className="w-full h-24 text-black text-[28px] font-normal">
          {t(
            "Внедрение единого стандарта управления проектами для обеспечения эффективности реализации, прозрачности всех этапов проектной деятельности и снижения рисков, связанных с реализацией проектов."
          )}
        </div>
        <div className="w-full h-5 text-black text-3xl font-semibold">
          {t("Развитие культуры проектного управления")}
        </div>
        <div className="w-full h-24 text-black text-[28px] font-normal">
          {t(
            "Формирование и укрепление культуры управления проектами в университете, способствующей повышению профессионального уровня сотрудников и улучшению результатов работы."
          )}
        </div>
        <div className="w-full h-5 text-black text-3xl font-semibold">
          {t("Внедрение передовых практик")}
        </div>
        <div className="w-full h-24 text-black text-[28px] font-normal">
          {t(
            "Анализ современных подходов и лучших мировых практик в области управления проектами, их адаптация и интеграция в процессы проектной деятельности КБТУ для достижения новых высот в управлении проектами."
          )}
        </div>
        <img
          src="/about/goal.svg"
          className="absolute h-150 end-0 mt-8 mr-30"
        />
      </div>
      <div className="w-full px-[70px] py-[35px] bg-[#002F6C] rounded-[20px] shadow-xl inline-flex flex-col justify-center items-center gap-3">
        <div className="h-20 text-center text-white text-5xl font-semibold">
          {t("Факты и цифры")}
        </div>
        <div className="w-full flex justify-center gap-5 text-[#002F6C] text-[28px]">
          <div className="h-60 flex gap-5 overflow-hidden w-140 p-12 bg-white rounded-[15px] justify-center items-center text-center text-[26px] font-semibold">
            {t(
              "В ОУП работают сертифицированные проектные менеджеры (IPMA), обладающие практическим опытом реализации проектов различной сложности"
            )}
            <img className="absolute h-60 opacity-5" src="/about/group3.svg" />
          </div>
          <div className="flex-1 inline-flex flex-col gap-5">
            <div className="h-20 bg-white rounded-[15px] inline-flex justify-center items-center text-center font-semibold">
              {t("Количество реализованных проектов при участии ОУП")}
            </div>
            <div className="inline-flex gap-6">
              <div className="flex-1 flex gap-2 h-35 bg-white rounded-[15px] justify-center items-center text-center">
                <img
                  className="absolute opacity-6 h-50 mt-[-60px]"
                  src="/about/mark.svg"
                />
                <span className="font-semibold">
                  {t("2023 г. -")}
                </span>
                <span className="font-black">
                  10
                </span>
                <span className="font-semibold">
                  {t("проектов")}
                </span>
              </div>
              <div className="flex-1 flex gap-2 h-35 bg-white rounded-[15px] justify-center items-center text-center">
                <img
                  className="absolute opacity-6 h-50 mt-[-60px]"
                  src="/about/mark.svg"
                />
                <span className="font-semibold">
                  {t("2024 г. -")}
                </span>
                <span className="font-black">
                  15
                </span>
                <span className="font-semibold">
                  {t("проектов")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
