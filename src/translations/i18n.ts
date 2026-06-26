import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import rwTranslations from './rw.json';
import enTranslations from './en.json';
import frTranslations from './fr.json';

const resources = {
  rw: {
    translation: rwTranslations,
  },
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'rw', // default language
    fallbackLng: 'rw',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false, // avoid suspense issues in simple renders
    },
  });

export default i18n;
