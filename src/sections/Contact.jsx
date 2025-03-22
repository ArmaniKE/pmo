import React from "react";

const Contact = () => {
  return (
    <div className="mt-[150px] px-[80px] space-y-[40px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">Контакты</span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="w-full rounded-2xl bg-white p-6 flex flex-row mr-10 shadow-lg">
        <div className="rounded-2xl bg-[#002F6C] p-10 w-[70%] text-white space-y-10 z-10">
          <div className="text-center text-[45px] font-semibold">
            Контактная информация
          </div>
          <div className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold mt-11">
            <img src="/contacts/geo.svg" className="h-8" />
            улица Толе Би 59, Алматы 050000
          </div>
          <div className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold">
            <img src="/contacts/call.svg" className="-8" />8 727 357 42 51
          </div>
          <div className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold mb-6">
            <img src="/contacts/mail.svg" className="-8" />
            info@kbtu.kz
          </div>
        </div>
        {/* <div className="border h-fit mt-10 ml-10 w-147 flex flex-row gap-x-6">
          <div className="w-80 text-[#B7B7B7] space-y-5">
            <input type="text" placeholder="Имя" className="bg-[#F3F3F3] rounded-xl py-4 px-5"/>
            <textarea type="text" placeholder="Комментарий" className="bg-[#F3F3F3] rounded-xl py-4 px-5"/>
          </div>
          <div className="w-80 text-[#B7B7B7] space-y-5">
            <input type="text" placeholder="Email" className="bg-[#F3F3F3] rounded-xl py-4 px-5"/>
            <input type="text" placeholder="Телефон" className="bg-[#F3F3F3] rounded-xl py-4 px-5"/>
            <button className="bg-[#002F6C] text-white text-center font-semibold rounded-xl py-4 px-5">Отправить</button>
          </div>
        </div> */}
        <div className="ml-8 mr-2 mt-10 space-y-4 w-full z-10">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <textarea
              placeholder="Комментарий"
              className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400 resize-none"
            />
            <div className="grid grid-rows-2 gap-4">
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400"
              />
              <button className="w-full p-4 bg-[#002F6C] text-white font-semibold rounded-xl cursor-pointer">
                Отправить
              </button>
            </div>
          </div>
        </div>
        <img src="/contacts/plane.svg" className="absolute h-120 w-[80%] mt-[-35px] ml-[-35px]"/>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8059332113116!2d76.9406866261559!3d43.25548892112383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb1fd99714f%3A0xb14acabfcaa5120f!2z0JrQsNC30LDRhdGB0YLQsNC90YHQutC-LdCR0YDQuNGC0LDQvdGB0LrQuNC5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2skz!4v1742574785449!5m2!1sru!2skz"
        className="w-full h-120 rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
};

export default Contact;
