import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang" || "ru"),   //default language
    fallbackLng: "ru",
    whitelist: ["en", "ru"],
    debug: true,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false
    },

  });


export default i18n;