import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerenderStaticPlugin from 'vite-plugin-prerender-static'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    prerenderStaticPlugin({
      routes: [
        { path: '/', tags: { title: 'Широкоформатная печать, Наружная реклама | FoxPrint', description: 'Широкоформатная печать Владивосток, Наружная реклама Владивосток, Брендирование авто Владивосток, Оформление торговых точек Владивосток, Оформление выставок Владивосток', canonical: 'https://xn--h1adkbggfmk.xn--p1ai' } },
        { path: '/services', tags: { title: 'Услуги: широкоформатная печать, вывески, брендирование авто | FoxPrint', description: 'Широкоформатная печать Владивосток, Наружная реклама Владивосток, Брендирование авто Владивосток, Оформление выставок Владивосток', canonical: 'https://xn--h1adkbggfmk.xn--p1ai/services' } },
        { path: '/aboutUs', tags: { title: 'О нас | FoxPrint', description: 'Более 10 лет опыта в производстве наружной рекламы во Владивостоке. Полностью собственное оборудование', canonical: '' } },
        { path: '/portfolio', tags: { title: 'Портфолио | FoxPrint', description: 'Изготовление и монтаж вывесок во Владивостоке, Брендирование авто, Широкоформатная печать Владивосток, Оформление торговых точек Владивосток', canonical: 'https://xn--h1adkbggfmk.xn--p1ai/portfolio' } },
        { path: '/contacts', tags: { title: 'Контакты | FoxPrint', description: 'Широкоформатная печать и наружная реклама г. Владивосток, ул. Снеговая, д. 73, левая сторона здания, 2 этаж', canonical: 'https://xn--h1adkbggfmk.xn--p1ai/contacts' } },
        { path: '/privacy', tags: { title: 'Политика | FoxPrint', description: 'Политика кониденциальности', canonical: 'https://xn--h1adkbggfmk.xn--p1ai/privacy' } },
      ],
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
