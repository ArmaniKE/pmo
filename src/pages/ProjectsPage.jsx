import React from "react";

const ProjectsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="px-[80px] mt-[130px] mb-100">
      <div className="mt-28 flex justify-between items-center gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Аналитическая цифровая платформа «Умная ферма»
          </span>
          <span className="text-lg leading-6">
            Управление производственными процессами -  создание технологических
            карт, разработка производственных планов, подготовка полей,
            контроль  посевов, полива, защиты растений, мониторинг процессов
            уборки, хранения урожая.
          </span>
          <span className="text-lg leading-6 text-[#002F6C] font-semibold">
            Получено авторское сведетельство и патент на полезную модель по
            проекту.
          </span>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/ferma.svg" className="h-75" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/nav.svg" className="h-75" />
        </div>
        <div className="w-[50%]  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Система ориентации (навигации) в здании КБТУ
          </span>
          <span className="text-lg leading-6">
            Помогает проложить оптимальный маршрут и найти необходимые локации.
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Приложение для автоматического открытия шлагбаума 
          </span>
          <span className="text-lg leading-6">
            Пользователь может открыть шлагбаум с телефона.​ ПО для Службы
            безопасности - позволяет контролировать время заезда, количество
            заездов и персонифицировать пользователей.​{" "}
          </span>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.web.kbtu"
            className="text-lg leading-6 text-[#002F6C] font-semibold underline"
          >
            https://play.google.com/store/apps/details?id=com.web.kbtu
          </a>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="/projects/shlagbaum.svg" className="h-80" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex items-end justify-center">
          <img src="/projects/nft.svg" className="h-60" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Проект NFT дипломы
          </span>
          <span className="text-lg leading-6">
            Портал с цифровым NFT дипломом. ​Реализация смарт-контракта на
            основе технологий blockchain исключает риск подделки диплома на
            100%​. <br />
            <br />
            Онлайн сервис для проверки диплома выпускника в открытой библиотеке
            NFT дипломов.
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Разработка “Цифровой платформы прослеживания семян”{" "}
          </span>
          <span className="text-lg leading-6">
            Разработана MVP версия платформы. Опубликована по ссылке{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kbtu.kaznaru.edu.kz/"
            >
              https://kbtu.kaznaru.edu.kz/.
            </a>
          </span>
          <span className="text-lg leading-6">
            Проведена демонстрация в КИЗ, руководителям ПО и ЗИР, а также акиму
            г. Алматы. Проводятся работы по развитию системы совместно с КазНАИУ
            , ПО и ЗИР.
          </span>
          <span className="text-lg text-[#002F6C] font-semibold">
            Получено авторское сведетельство по проекту.{" "}
          </span>
        </div>
        <div className="w-[50%] p-3 flex justify-center">
          <img src="/projects/seeds.svg" className="" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] flex items-end justify-center">
          <img src="/projects/esg.svg" className="h-65" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Банк технологии КБТУ
          </span>
          <span className="text-lg leading-6">
            Силами студентов КБТУ разработана MVP версия проекта. <br />
            <br />
            Сайт опубликован по ссылке{" "}
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
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Участие в проекте по развитию “Аналитической базы данных” совместно
            с компанией AppStream{" "}
          </span>
          <span className="text-lg leading-6">
            Разработан инструмент для анализа социально-экономических
            показателей нефтегазовой отрасли, построения социально-экономических
            моделей, медиа мониторинга, для обеспечения стратегического
            планирования на основе анализа трендов и потребностей отрасли.{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kbtu.kaznaru.edu.kz/"
            >
              https://exia.kz
            </a>
          </span>
        </div>
        <div className="w-[50%] p-3 flex justify-center">
          <img src="/projects/exia.svg" className="h-60" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex items-end justify-center">
          <img src="/projects/kazmg.svg" className="h-70" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Аналитическая Система Диспетчерского центра АО НК «КазМунайГаз»{" "}
          </span>
          <span className="text-lg leading-6">
            Разработана централизованная информационная и аналитическая
            поддержка управления процессами производства и реализации
            нефтепродуктов.
          </span>
          <span className="text-lg leading-6 text-[#002F6C] font-semibold">
            Получено авторское сведетельство по проекту.
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Проекте DPG
          </span>
          <span className="text-lg leading-6">
            Выполнен совместно с GameLab KBTU по заказу детского фонда ООН
            ЮНИСЕФ. <br /> Цель: увеличение количества проектов, способствующих
            устойчивому развитию через создание цифровых общественных благ.{" "}
            <br />
            Курс был подготовлен для школьников и студентов опубликован на
            платформе learningpassport:{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://kaz.learningpassport.org/"
            >
              https://kaz.learningpassport.org/
            </a>{" "}
            <br />
            Информация по курсу{" "}
            <a
              target="_blank"
              className="text-[#002F6C]"
              href="https://dpglab.kbtu.kz/"
            >
              https://dpglab.kbtu.kz/
            </a>{" "}
            Для данного курса была разработана игра
          </span>
        </div>
        <div className="w-[50%] p-3 flex justify-center">
          <img src="/projects/dpg.svg" className="" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex items-end justify-center">
          <img src="/projects/unisat.svg" className="" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Unisat Game
          </span>
          <span className="text-lg leading-6">
            По заказу детского фонда ООН Юнисеф и КазНУ им.Аль-Фараби GameLab
            KBTU разработал игру для геймификации процесса сборки наноспутника.
            <br />
            Игра создана и опубликована на портале:
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
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Онлайн курс и хакатон по геймификации в партнёрстве ЮНИСЕФ
          </span>
          <span className="text-lg leading-6">
            В 2023 г. GameLab KBTU совместно с Детским Фондом ООН (ЮНИСЕФ) в
            Казахстане запустили программу по поддержке девушек в STEAM
            (science, technology, engineering, arts, math).
            <ul className="list-disc list-inside">
              <li>
                Создан открытый онлайн курс «Level Up: введение в видеоигры и
                геймификацию» на русском и казахском языках на платформе
                Learning Passport.
              </li>
              <li>На курс зарегистрировалось 700+ участников.</li>
              <li>
                Проведен первый хакатон по геймификации для 50 лучших выпускниц
                курса
              </li>
            </ul>
          </span>
        </div>
        <div className="w-[50%] p-3 flex justify-center">
          <img src="/projects/hack.svg" className="" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10">
        <div className="w-[50%] flex justify-center">
          <img src="/projects/skud.svg" className="mt-8" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Модернизация системы СКУД с внедрением биометрии (распознавания лиц)
          </span>
          <span className="text-lg leading-6">
            Совместно с СБ модернизирована система СКУД, внедрена биометрия
            (распознавание лиц). Усовершенствована пропускная система. 
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Психологический тест Разуваевой
          </span>
          <span className="text-lg leading-6">
            Подготовлен опросник для студентов. Результаты находятся у психолога
            КБТУ, данный опросник психолог использует для определения
            психологического состояния студентов, при необходимости записывает
            студентов на онлайн/оффлайн консультации для проведения с ним работ.
            <br />
            <br />
            Ознакомится с тестом-опросником можно по ссылке: <br />
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
          <img src="/projects/test.svg" className="h-85" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] flex items-end justify-center">
          <img src="/projects/qazinn.svg" className="" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Инкубационная программа для QazInnovation
          </span>
          <span className="text-lg leading-6">
            Реализована инкубационная программа и выявлены потенциальных
            стартап-идеи с дальнейшей передачей их заказчику. <br />
            Проведены мероприятия для стартапов:
            <ul className="list-disc list-inside">
              <li>воркшопы</li>
              <li>трекинги</li>
              <li>консультациис тартап команд</li>
              <li>
                обучающий мастер-класс по организации и проведению инкубационных
                программ
              </li>
              <li>Demo day</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%] p-3 flex flex-col gap-y-4 justify-center">
          <span className="w-[110%] text-xl text-[#002F6C] font-semibold">
            Создание практического класса нефтяного полигона в СЭЗ «ПИТ»
          </span>
          <span className="text-lg leading-6">
            В 2024 г. запущено учебное месторождение АО «Каспий нефть» в СЭЗ
            «ПИТ». Пробурено 5 скважин, оснащенных оборудованием, применяемым на
            реальных месторождениях. <br /> Имеется подземный резервуар объемом
            5 кубометров, имитирующий месторождение. <br />
            Все скважины оцифрованы, информация передается в диспетчерскую,
            расположенную в КБТУ.
            <br />
            Тренировочным полем также можно управлять из диспетчерской.
          </span>
        </div>
        <div className="w-[50%]  flex justify-center">
          <img src="/projects/pit.svg" className="h-75" />
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8">
        <div className="w-[50%]  flex items-end justify-center">
          <img src="/projects/oup.svg" className="h-80" />
        </div>
        <div className="w-[50%] p-3  flex flex-col gap-y-8 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            ОУП участвовал с другими подразделениями КБТУ в организации и
            проведении конференций:
          </span>
          <span className="text-lg leading-6">
            <ul className="list-disc list-inside">
              <li>
                ХI Международная научно-практическая конференция «Развитие
                урановой и редкометальной промышленности»
              </li>
              <li>
                Х Юбилейная Международная научно-практическая конференция
                «Актуальные проблемы урановой промышленности»
              </li>
              <li>Форум по цифровизации Digital Almaty</li>
              <li>10-летие Морской академии</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="border-t border-[#002F6C] mt-8 left-[80px] right-[80px] mb-8" />
      <div className="flex justify-between gap-x-10 py-8 mb-[-450px]">
        <div className="p-3 flex flex-col gap-y-6 justify-center">
          <span className="text-xl text-[#002F6C] font-semibold">
            Подготовка требований для сайта kbtu.edu.kz
          </span>
          <span className="text-lg leading-6">
            <ul className="list-disc list-inside">
              <li>Проведены исследования потребностей пользователей</li>
              <li>Сформулированы требования к продукту</li>
              <li>Создана структура продукта в графическом редакторе.</li>
              <li>Выбор способа технической реализации продукта</li>
              <li>
                Создан прототип продукта в графическом редакторе Figma: <br />
                <a
                  className="text-[#002F6C]"
                  href="https://www.figma.com/proto/I6WoEkpJGLrhAbZOgpFx6O?node-id=512-2&mode=design&t=WFOH2dQlqYiJY93L-6"
                  target="_blank"
                >
                  https://www.figma.com/proto/I6WoEkpJGLrhAbZOgpFx6O?node-id=512-2&mode=design&t=WFOH2dQlqYiJY93L-6
                </a>
              </li>
              <li>
                Проведен анализ референсов и UX исследования по ссылке: <br />
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
