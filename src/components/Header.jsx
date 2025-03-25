import { Link } from "react-router-dom";
import Lang from "./Lang";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[130px] px-[80px] flex justify-between items-center bg-[#F2F2F2]">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img className="h-18" src="/header/logo1.svg" />
      </Link>
      <div className="flex text-xl justify-center items-center space-x-20">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("about").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>О нас</div>
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("projects").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>Проекты</div>
        </a>
        <a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("contacts").offsetTop - 170,
              behavior: "smooth",
            });
          }}
        >
          <div>Контакты</div>
        </a>
      </div>
      <Lang />
      <div className="absolute left-[80px] right-[80px] border-b border-[#002F6C] bottom-0" />
    </header>
  );
};

export default Header;
