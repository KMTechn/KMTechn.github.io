import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  resources: {
    en: {
      translation: {
        "nav_about": "About Us",
        "nav_business": "Business",
        "nav_partners": "Partners",
        "nav_contact": "Contact",
        "footer_copyright": "© 2024 KMTech. All Rights Reserved."
      }
    }
  },
});