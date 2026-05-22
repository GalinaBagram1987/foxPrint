import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerenderStatic from 'vite-plugin-prerender-static'

// import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    prerenderStatic({
      routes: [
        { path: '/', 
          tags: { 
            title: 'Широкоформатная печать, Наружная реклама | FoxPrint', 
            description: 'Печать баннера Владивосток, Печать баннеров Владивосток, изготовление вывески Владивосток, изготовление таблички Владивосток, печать пленки Владивосток, световая вывеска Владивосток, Широкоформатная печать Владивосток,  Наружная реклама Владивосток, Брендирование авто Владивосток, Оформление торговых точек Владивосток, табличка режим работы Владивосток, печать наклеек Владивосток, печать стикеров Владивосток, наклейка на яхту Владивосток, вывеска Владивосток, Х-стойка Владивосток, ростовая фигура Владивосток, печать пленки Владивосток, Оформление выставок Владивосток',
            canonical: 'https://xn--h1adkbggfmk.xn--p1ai', 
            robots: 'index, follow',
            schema: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ФоксПринт",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Владивосток",
              "streetAddress": "ул. Снеговая, д. 73"
            },
            "priceRange": "$$"
          }
        }
      },
        { path: '/services', tags: { title: 'Услуги: широкоформатная печать, вывески, брендирование авто | FoxPrint', description: 'Печать баннеров во Владивостоке, Широкоформатная печать во Владивостоке, Наружная реклама Владивосток, Брендирование авто Владивосток, Оформление выставок Владивосток', canonical: 'https://xn--h1adkbggfmk.xn--p1ai', robots: 'index, follow' } },
        { path: '/aboutUs', tags: { title: 'О нас | FoxPrint', description: 'Собственное производство во Владивостоке: широкоформатная печать, вывески, брендирование авто, оформление магазинов. Работаем с 2018 года. Закажите расчёт!', canonical: 'https://xn--h1adkbggfmk.xn--p1ai', robots: 'index, follow' } },
        { path: '/portfolio', tags: { title: 'Портфолио | FoxPrint', description: 'Печать баннеров во Владивостоке, Изготовление и монтаж вывесок во Владивостоке, Брендирование авто, Широкоформатная печать Владивосток, Оформление торговых точек Владивосток', canonical: 'https://xn--h1adkbggfmk.xn--p1ai', robots: 'index, follow' } },
        { path: '/contacts', tags: { title: 'Контакты | FoxPrint', description: 'Печать баннеров во Владивостоке, Широкоформатная печать и наружная реклама г. Владивосток, ул. Снеговая, д. 73, левая сторона здания, 2 этаж', canonical: 'https://xn--h1adkbggfmk.xn--p1ai', robots: 'index, follow' } },
        { path: '/privacy', tags: { title: 'Политика | FoxPrint', description: 'Печать баннеров во Владивостоке, Политика кониденциальности', canonical: 'https://xn--h1adkbggfmk.xn--p1ai/privacy', robots: 'noindex, nofollow'  } },
      ],
      render: (route) => {
        return `<div id="root">Static content for ${route.path}</div>`;
      },
      }),
    ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
})
