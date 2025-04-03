import { Link } from "react-router-dom";
import Lang from "./Lang";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[130px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img className="h-15 ml-[20px]" src="/header/logo3.svg" />
      </Link>
      <div className="flex text-[28px] justify-center items-center space-x-20 mr-20">
        <div
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("about").offsetTop - 170,
              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        >
          {t("О нас")}
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("projects").offsetTop - 170,
              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        >
          {t("Проекты")}
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("contacts").offsetTop - 170,
              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        >
          {t("Контакты")}
        </div>
      </div>
      <Lang />
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0" />
    </header>
  );
};

export default Header;
