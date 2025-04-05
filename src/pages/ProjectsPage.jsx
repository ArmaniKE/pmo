import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-[80px] mt-[130px] mb-130">
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10 mt-40">
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Аналитическая цифровая платформа «Умная ферма»")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Управление производственными процессами - создание технологических карт, разработка производственных планов, подготовка полей, контроль посевов, полива, защиты растений, мониторинг процессов уборки, хранения урожая."
            )}
          </span>
          <span className="text-2xl leading-8 text-[#002F6C] font-semibold">
            {t(
              "Получено авторское сведетельство и патент на полезную модель по проекту."
            )}
          </span>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/ferma.svg" className="h-100" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/nav.svg" className="h-100" />
        </div>
        <div className="w-[50%] flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Система ориентации (навигации) в здании КБТУ")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Помогает проложить оптимальный маршрут и найти необходимые локации."
            )}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Приложение для автоматического открытия шлагбаума")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Пользователь может открыть шлагбаум с телефона. ПО для Службы безопасности - позволяет контролировать время заезда, количество заездов и персонифицировать пользователей."
            )}
          </span>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.web.kbtu"
            className="text-2xl leading-8 text-[#002F6C] font-semibold underline"
          >
            https://play.google.com/store/apps/details?id=com.web.kbtu
          </a>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/shlagbaum.svg" className="h-100" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex items-end justify-center">
          <img src="/projects/nft.svg" className="h-90" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Проект NFT дипломы")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Портал с цифровым NFT дипломом. Реализация смарт-контракта на основе технологий blockchain исключает риск подделки диплома на 100%. Онлайн сервис для проверки диплома выпускника в открытой библиотеке NFT дипломов."
            )}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[53%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-4">
            {t("Разработка “Цифровой платформы прослеживания семян”")}
          </span>
          <span className="text-2xl leading-8">
            {t("Разработана MVP версия платформы. Опубликована по ссылке")}{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kbtu.kaznaru.edu.kz/"
            >
              https://kbtu.kaznaru.edu.kz/.
            </a>
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Проведена демонстрация в КИЗ, руководителям ПО и ЗИР, а также акиму г. Алматы. Проводятся работы по развитию системы совместно с КазНАИУ , ПО и ЗИР."
            )}
          </span>
          <span className="text-2xl text-[#002F6C] font-semibold">
            {t("Получено авторское сведетельство по проекту.")}
          </span>
        </div>
        <div className="w-[50%] p-8 flex justify-center">
          <img src="/projects/seeds.svg" className="h-90" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] flex items-end justify-center">
          <img src="/projects/esg.svg" className="h-90" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Банк технологии КБТУ")}
          </span>
          <span className="text-2xl leading-8">
            {t("Силами студентов КБТУ разработана MVP версия проекта.")} <br />
            <br />
            {t("Сайт опубликован по ссылке")}{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://pmo.kbtu.kz/"
            >
              https://pmo.kbtu.kz/
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-4">
            {t(
              "Участие в проекте по развитию “Аналитической базы данных” совместно с компанией AppStream"
            )}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Разработан инструмент для анализа социально-экономических показателей нефтегазовой отрасли, построения социально-экономических моделей, медиа мониторинга, для обеспечения стратегического планирования на основе анализа трендов и потребностей отрасли."
            )}{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kbtu.kaznaru.edu.kz/"
            >
              https://exia.kz
            </a>
          </span>
        </div>
        <div className="w-[50%] p-8 flex justify-center">
          <img src="/projects/exia.svg" className="h-90" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex items-end justify-center">
          <img src="/projects/kazmg.svg" className="h-90" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t(
              "Аналитическая Система Диспетчерского центра АО НК «КазМунайГаз»"
            )}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Разработана централизованная информационная и аналитическая поддержка управления процессами производства и реализации нефтепродуктов."
            )}
          </span>
          <span className="text-2xl leading-8 text-[#002F6C] font-semibold">
            {t("Получено авторское сведетельство по проекту.")}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-4">
            {t("Проекте DPG")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Выполнен совместно с GameLab KBTU по заказу детского фонда ООН ЮНИСЕФ. Цель: увеличение количества проектов, способствующих устойчивому развитию через создание цифровых общественных благ. Курс был подготовлен для школьников и студентов опубликован на платформе learningpassport:"
            )}{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kaz.learningpassport.org/"
            >
              https://kaz.learningpassport.org/
            </a>{" "}
            <br />
            {t("Информация по курсу")}{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://dpglab.kbtu.kz/"
            >
              https://dpglab.kbtu.kz/
            </a>{" "}
            {t("Для данного курса была разработана игра")}
          </span>
        </div>
        <div className="w-[50%] p-8 flex justify-center">
          <img src="/projects/dpg.svg" className="" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex items-end justify-center">
          <img src="/projects/unisat.svg" className="" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Unisat Game")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "По заказу детского фонда ООН Юнисеф и КазНУ им.Аль-Фараби GameLab KBTU разработал игру для геймификации процесса сборки наноспутника."
            )}
            <br />
            {t("Игра создана и опубликована на портале:")}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://gamelab-kbtu.itch.io/unisat-game"
            >
              https://gamelab-kbtu.itch.io/unisat-game
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-4">
            {t("Онлайн курс и хакатон по геймификации в партнёрстве ЮНИСЕФ")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "В 2023 г. GameLab KBTU совместно с Детским Фондом ООН (ЮНИСЕФ) в Казахстане запустили программу по поддержке девушек в STEAM (science, technology, engineering, arts, math)."
            )}
            <ul className="list-disc list-inside">
              <li>
                {t(
                  "Создан открытый онлайн курс «Level Up: введение в видеоигры и геймификацию» на русском и казахском языках на платформе Learning Passport."
                )}
              </li>
              <li>{t("На курс зарегистрировалось 700+ участников.")}</li>
              <li>
                {t(
                  "Проведен первый хакатон по геймификации для 50 лучших выпускниц курса"
                )}
              </li>
            </ul>
          </span>
        </div>
        <div className="w-[50%] p-8 flex justify-center">
          <img src="/projects/hack.svg" className="" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] flex justify-center">
          <img src="/projects/skud.svg" className="mt-8" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t(
              "Модернизация системы СКУД с внедрением биометрии (распознавания лиц)"
            )}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Совместно с СБ модернизирована система СКУД, внедрена биометрия (распознавание лиц). Усовершенствована пропускная система."
            )}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-4">
            {t("Психологический тест Разуваевой")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Подготовлен опросник для студентов. Результаты находятся у психолога КБТУ, данный опросник психолог использует для определения психологического состояния студентов, при необходимости записывает студентов на онлайн/оффлайн консультации для проведения с ним работ."
            )}
            <br />
            <br />
            {t("Ознакомится с тестом-опросником можно по ссылке:")} <br />
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeWwZQQUibSwk3ef2nM3NRJKz1kPgziXmr_pxyDWdOMrFCBw/viewform"
            >
              https://docs.google.com/forms/d/e/1FAIpQLSdeWwZQQUibSwk3e
              f2nM3NRJKz1kPgziXmr_pxyDWdOMrFCBw/viewform
            </a>
          </span>
        </div>
        <div className="w-[50%] flex justify-center">
          <img src="/projects/test.svg" className="h-130" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] flex items-end justify-center">
          <img src="/projects/qazinn.svg" className="h-110" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t("Инкубационная программа для QazInnovation")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "Реализована инкубационная программа и выявлены потенциальных стартап-идеи с дальнейшей передачей их заказчику. Проведены мероприятия для стартапов:"
            )}
            <ul className="list-disc list-inside">
              <li>{t("воркшопы")}</li>
              <li>{t("трекинги")}</li>
              <li>{t("консультациис тартап команд")}</li>
              <li>
                {t(
                  "обучающий мастер-класс по организации и проведению инкубационных программ"
                )}
              </li>
              <li>{t("Demo day")}</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] p-8 flex flex-col gap-y-4 justify-center">
          <span className="w-[110%] text-3xl text-[#002F6C] font-semibold mb-4">
            {t("Создание практического класса нефтяного полигона в СЭЗ «ПИТ»")}
          </span>
          <span className="text-2xl leading-8">
            {t(
              "В 2024 г. запущено учебное месторождение АО «Каспий нефть» в СЭЗ «ПИТ». Пробурено 5 скважин, оснащенных оборудованием, применяемым на реальных месторождениях. Имеется подземный резервуар объемом 5 кубометров, имитирующий месторождение. Все скважины оцифрованы, информация передается в диспетчерскую, расположенную в КБТУ. Тренировочным полем также можно управлять из диспетчерской."
            )}
          </span>
        </div>
        <div className="w-[50%] flex justify-center">
          <img src="/projects/pit.svg" className="h-100" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 border-b border-[#002F6C] pb-15 mb-10">
        <div className="w-[50%] flex items-end justify-center">
          <img src="/projects/oup.svg" className="h-100" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-y-8 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold">
            {t(
              "ОУП участвовал с другими подразделениями КБТУ в организации и проведении конференций:"
            )}
          </span>
          <span className="text-2xl leading-8">
            <ul className="list-disc list-inside">
              <li>
                {t(
                  "ХI Международная научно-практическая конференция «Развитие урановой и редкометальной промышленности»"
                )}
              </li>
              <li>
                {t(
                  "Х Юбилейная Международная научно-практическая конференция «Актуальные проблемы урановой промышленности»"
                )}
              </li>
              <li>{t("Форум по цифровизации Digital Almaty")}</li>
              <li>{t("10-летие Морской академии")}</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-10 py-8 mb-[-450px]">
        <div className="p-8 flex flex-col gap-y-6 justify-center">
          <span className="text-3xl text-[#002F6C] font-semibold mb-2">
            {t("Подготовка требований для сайта kbtu.edu.kz")}
          </span>
          <span className="text-2xl leading-8">
            <ul className="list-disc list-inside">
              <li>{t("Проведены исследования потребностей пользователей")}</li>
              <li>{t("Сформулированы требования к продукту")}</li>
              <li>
                {t("Создана структура продукта в графическом редакторе.")}
              </li>
              <li>{t("Выбор способа технической реализации продукта")}</li>
              <li>
                {t("Создан прототип продукта в графическом редакторе Figma:")}{" "}
                <br />
                <a
                  className="text-[#002F6C]"
                  href="https://www.figma.com/proto/I6WoEkpJGLrhAbZOgpFx6O?node-id=512-2&mode=design&t=WFOH2dQlqYiJY93L-6"
                  target="_blank"
                >
                  https://www.figma.com/proto/I6WoEkpJGLrhAbZOgpFx6O?node-id=512-2&mode=design&t=WFOH2dQlqYiJY93L-6
                </a>
              </li>
              <li>
                {t("Проведен анализ референсов и UX исследования по ссылке:")}{" "}
                <br />
                <a
                  className="text-[#002F6C]"
                  href="https://kbtuedu-my.sharepoint.com/:f:/g/personal/infoinit_kbtu_kz/Ev7YXDAb4YdFh0HgAdTbzbABfbhHc9pjHtAHaShXxsnmCw?e=HlQJYU"
                  target="_blank"
                >
                  https://kbtuedu-my.sharepoint.com/:f:/g/personal/infoinit_kbtu_kz/
                  Ev7YXDAb4YdFh0HgAdTbzbABfbhHc9pjHtAHaShXxsnmCw?e=HlQJYU
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
