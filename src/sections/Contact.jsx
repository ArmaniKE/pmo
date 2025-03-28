import React, { useState } from "react"; // Добавлен импорт useState
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setSubmitStatus({ success: true, message: t("Сообщение успешно отправлено!") });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSubmitStatus({ success: false, message: t("Ошибка при отправке. Пожалуйста, попробуйте позже.") });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="contacts" className="mt-[200px] px-[80px] space-y-[40px]">
      <div className="flex items-center gap-10">
        <div className="border-t-3 border-[#002F6C] flex-grow" />
        <span className="text-4xl font-semibold text-[#002F6C]">
          {t("Контакты")}
        </span>
        <div className="border-t-3 border-[#002F6C] flex-grow" />
      </div>
      <div className="w-full rounded-2xl bg-white p-6 flex flex-row mr-10 shadow-lg">
        <div className="rounded-2xl bg-[#002F6C] p-10 w-[70%] text-white space-y-10 z-10">
          <div className="text-center text-[45px] font-semibold">
            {t("Контактная информация")}
          </div>
          <a
            href="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82/@43.2554889,76.9406866,17z/data=!4m10!1m2!2m1!1skbtu!3m6!1s0x38836fb1fd99714f:0xb14acabfcaa5120f!8m2!3d43.2552989!4d76.9432821!15sCgRrYnR1kgEKdW5pdmVyc2l0eeABAA!16s%2Fm%2F0cr578v!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold mt-11"
          >
            <img src="/contacts/geo.svg" className="h-8" alt="Location" />
            {t("улица Толе Би 59, Алматы 050000")}
          </a>
          <a
            href="tel:87273574251"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold"
          >
            <img src="/contacts/call.svg" className="h-8" alt="Phone" />
            {t("8 727 357 42 51")}
          </a>
          <a
            href="mailto:info@kbtu.kz"
            className="items-center ml-6 py-3 flex flex-row gap-x-5 text-lg font-semibold mb-6"
          >
            <img src="/contacts/mail.svg" className="h-8" alt="Email" />
            {t("info@kbtu.kz")}
          </a>
        </div>
        <div className="ml-8 mr-2 mt-10 space-y-4 w-full z-10">
          {submitStatus && (
            <div className={`p-3 rounded-xl ${
              submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Имя")}
                className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Email")}
                className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("Комментарий")}
                className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300 resize-none"
                required
              />
              <div className="grid grid-rows-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("Телефон")}
                  className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#002F6C] transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full p-4 bg-[#002F6C] hover:bg-[#002f7c] transition-colors duration-300 text-white font-semibold rounded-xl cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? t("Отправка...") : t("Отправить")}
                </button>
              </div>
            </div>
          </form>
        </div>
        <img
          src="/contacts/plane.svg"
          className="absolute h-120 w-[80%] mt-[-35px] ml-[-35px]"
          alt="Decoration"
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8059332113116!2d76.9406866261559!3d43.25548892112383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb1fd99714f%3A0xb14acabfcaa5120f!2z0JrQsNC30LDRhdGB0YLQsNC90YHQutC-LdCR0YDQuNGC0LDQvdGB0LrQuNC5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2skz!4v1742574785449!5m2!1sru!2skz"
        className="w-full h-120 rounded-xl shadow-lg"
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default Contact;