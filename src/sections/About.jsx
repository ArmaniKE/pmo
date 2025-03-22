import React from "react";

const About = () => {
  return (
    <div className="mt-[130px] px-[80px] space-y-[50px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-5xl font-semibold text-[#002F6C]">О нас</span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="w-full p-[40px] bg-[#002F6C] rounded-[20px] shadow-lg">
        <div className="text-center">
          <span className="text-white text-xl font-semibold">
            Проектный офис КБТУ
          </span>
          <span className="text-white text-xl font-normal">
            , основанный в 2022 году, был создан как внутреннее подразделение
            университета с целью <br /> внедрения и продвижения современных
            практик и подходов проектного управления в его деятельности.
          </span>
        </div>
      </div>
      <div className="w-full p-[40px] bg-white rounded-[20px] shadow-lg inline-flex flex-col gap-4">
        <div className="justify-start text-black text-4xl font-semibold">
          Наша миссия
        </div>
        <div className="w-full outline-1 outline-[#002F6C]"></div>
        <div className="self-stretch text-black text-lg font-normal">
          Создавать и развивать проектную культуру в университете, внедряя
          передовые методы управления, способствующие устойчивому развитию и
          укреплению позиций вуза в образовательной и научной сферах.
        </div>
        <div className="self-stretch text-black text-lg font-normal">
          Выступать центром компетенций в области проектного управления,
          поддерживая и развивая внутренние и внешние инициативы университета.
        </div>
      </div>
      <div className="w-full p-[40px] bg-white rounded-[20px] shadow-lg inline-flex flex-col gap-4">
        <div className="w-full text-black text-4xl font-semibold">
          Наши цели
        </div>
        <div className="w-full outline-1 outline-[#002F6C]"></div>
        <div className="w-full h-5 text-black text-xl font-semibold">
          Унификация процессов и повышение прозрачности
        </div>
        <div className="w-full h-15 text-black text-lg font-normal">
          Внедрение единого стандарта управления проектами для обеспечения
          эффективности реализации, прозрачности всех этапов проектной
          деятельности и снижения рисков, связанных с реализацией проектов.
        </div>
        <div className="w-full h-5 text-black text-xl font-semibold">
          Развитие культуры проектного управления
        </div>
        <div className="w-full h-15 text-black text-lg font-normal">
          Формирование и укрепление культуры управления проектами в
          университете, способствующей повышению профессионального уровня
          сотрудников и улучшению результатов работы.
        </div>
        <div className="w-full h-5 text-black text-xl font-semibold">
          Внедрение передовых практик
        </div>
        <div className="w-full h-15 text-black text-lg font-normal">
          Анализ современных подходов и лучших мировых практик в области
          управления проектами, их адаптация и интеграция в процессы проектной
          деятельности КБТУ для достижения новых высот в управлении проектами.
        </div>
        <img src="/about/goal.svg" className="absolute h-100 mt-3 end-0 mr-20"/>
      </div>
      <div className="w-full px-[70px] py-[35px] bg-[#002F6C] rounded-[20px] shadow-lg inline-flex flex-col justify-center items-center gap-3">
        <div className="self-stretch h-14 text-center text-white text-4xl font-semibold">
          Факты и цифры
        </div>
        <div className="w-full inline-flex justify-center gap-5">
          <div className="h-43 flex gap-5 overflow-hidden">
            <div className="w-100 self-stretch p-7 bg-white rounded-[15px] flex justify-center items-center gap-2">
              <div className="text-center text-[#002F6C] text-lg font-semibold leading-6">
                В ОУП работают сертифицированные проектные менеджеры (IPMA),
                обладающие практическим опытом реализации проектов различной
                сложности
              </div>
              <img
                src="/about/group3.svg"
                className="absolute h-43 opacity-5"
              />
              {/* <div className="w-80 h-80 left-[64px] top-[-74px] absolute opacity-5">
                <div className="w-80 h-52 left-0 top-[51.33px] absolute bg-[#002F6C]" />
              </div> */}
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col gap-5">
            <div className="self-stretch h-14 p-7 bg-white rounded-[15px] inline-flex justify-center items-center gap-2">
              <div className="flex-1 text-center text-[#002F6C] text-lg font-semibold">
                Количеств реализованных проектов при участии ОУП
              </div>
            </div>
            <div className="self-stretch inline-flex gap-5">
              <div className="flex-1 flex gap-5">
                <div className="flex-1 h-24 p-7 bg-white rounded-[15px] flex justify-center items-center gap-2">
                  <div className="text-center">
                    <img
                      src="/about/mark.svg"
                      className="absolute opacity-6 h-35 mt-[-116px]"
                    />
                    <span className="text-[#002F6C] text-xl font-semibold">
                      2023 г. -{" "}
                    </span>
                    <span className="text-[#002F6C] text-xl font-black">10</span>
                    <span className="text-[#002F6C] text-xl font-semibold">
                      {" "}
                      проектов{" "}
                    </span>
                  </div>
                  {/* <div className="w-72 h-52 left-[28px] top-[-118px] absolute opacity-5">
                    <div className="w-48 h-36 left-[46.68px] top-[72.45px] absolute bg-[#002F6C]" />
                  </div> */}
                </div>
              </div>
              <div className="flex-1 flex gap-5">
                <div className="flex-1 h-24 p-7 bg-white rounded-[15px] flex justify-center items-center gap-2">
                  <div className="text-center">
                    <img
                      src="/about/mark.svg"
                      className="absolute opacity-6 h-35 mt-[-116px]"
                    />
                    <span className="text-[#002F6C] text-xl font-semibold">
                      2024 г. -{" "}
                    </span>
                    <span className="text-[#002F6C] text-xl font-black">15</span>
                    <span className="text-[#002F6C] text-xl font-semibold">
                      {" "}
                      проектов{" "}
                    </span>
                  </div>
                  {/* <div className="w-72 h-52 left-[28px] top-[-118px] absolute opacity-5">
                    <div className="w-48 h-36 left-[46.68px] top-[72.45px] absolute bg-[#002F6C]" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
