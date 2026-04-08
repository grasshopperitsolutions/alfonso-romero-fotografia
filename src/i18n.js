import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import seoES from './locales/es/seo.json';
import seoEN from './locales/en/seo.json';

const resources = {
  es: {
    translation: translationES,
    seo: seoES
  },
  en: {
    translation: translationEN,
    seo: seoEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'path', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;