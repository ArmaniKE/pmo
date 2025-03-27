import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contacts" className="mt-[200px] px-[80px] space-y-[60px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-6xl font-semibold text-[#002F6C]">
          {t("Контакты")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="w-full rounded-2xl bg-white p-6 flex flex-row mr-10 shadow-lg">
        <div className="rounded-2xl bg-[#002F6C] p-10 w-[70%] text-white space-y-18 z-10">
          <div className="text-center text-[45px] font-semibold">
            {t("Контактная информация")}
          </div>
          <a
            href="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82/@43.2554889,76.9406866,17z/data=!4m10!1m2!2m1!1skbtu!3m6!1s0x38836fb1fd99714f:0xb14acabfcaa5120f!8m2!3d43.2552989!4d76.9432821!15sCgRrYnR1kgEKdW5pdmVyc2l0eeABAA!16s%2Fm%2F0cr578v!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-2xl font-semibold mt-11"
          >
            <img src="/contacts/geo.svg" className="h-12" />
            {t("улица Толе Би 59, Алматы 050000")}
          </a>
          <a
            href="tel:87273574251"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-2xl font-semibold"
          >
            <img src="/contacts/call.svg" className="h-11" />
            {t("8 727 357 42 51")}
          </a>
          <a
            href="mailto:info@kbtu.kz"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-2xl font-semibold mb-6"
          >
            <img src="/contacts/mail.svg" className="h-11" />
            {t("info@kbtu.kz")}
          </a>
        </div>
        <div className="ml-15 mr-8 mt-15 space-y-8 w-full z-10 text-2xl">
          <div className="grid grid-cols-2 gap-8">
            <input
              className="w-full p-6 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
              type="text"
              placeholder={t("Имя")}
            />
            <input
              className="w-full p-6 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
              type="email"
              placeholder={t("Email")}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <textarea
              className="w-full p-6 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300 resize-none"
              placeholder={t("Комментарий")}
            />
            <div className="grid grid-rows-2 gap-8">
              <input
                className="w-full p-6 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
                type="tel"
                placeholder={t("Телефон")}
              />
              <button className="w-full p-6 bg-[#002F6C] hover:bg-[#002f7c] transition-colors duration-300 text-white font-semibold rounded-xl cursor-pointer">
                {t("Отправить")}
              </button>
            </div>
          </div>
        </div>
        {/* <img
          src="/contacts/plane.svg"
          className="absolute h-120 w-[80%] mt-[-35px] ml-[-35px]"
        /> */}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8059332113116!2d76.9406866261559!3d43.25548892112383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb1fd99714f%3A0xb14acabfcaa5120f!2z0JrQsNC30LDRhdGB0YLQsNC90YHQutC-LdCR0YDQuNGC0LDQvdGB0LrQuNC5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2skz!4v1742574785449!5m2!1sru!2skz"
        className="w-full h-160 rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
};

export default Contact;
