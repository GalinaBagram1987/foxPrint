import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './locales/resources.js'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'ru',
    debug: import.meta.env.DEV, // В Vite это boolean: true/false
    // debug: import.meta.env?.DEV === 'development',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n