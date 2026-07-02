import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Mock matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock localStorage
const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock ResizeObserver
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav_about: 'About Us',
          nav_business: 'Business',
          nav_partners: 'Partners',
          nav_contact: 'Contact',
          footer_description: 'Global 3PL logistics partner',
          footer_quick_links: 'Quick Links',
          footer_services: 'Services',
          footer_copyright: '© 2024 KMTech. All Rights Reserved.',
          footer_privacy: 'Privacy Policy',
          footer_terms: 'Terms of Service',
          contact_office_title: 'Office',
          contact_office_address: 'KMTech office address',
          contact_office_email: 'info@kmtech.com',
          tpl_warehouse_title: 'Warehouse Management',
          tpl_inspection_title: 'Inspection & Quality Control',
          tpl_packaging_title: 'Packaging & Distribution',
        },
      },
    },
  });
}
