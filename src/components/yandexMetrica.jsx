
const loadYandexMetrika = () => {
  if (window.ym) return; // уже загружена

  const script = document.createElement('script');
  script.src = 'https://mc.yandex.ru/metrika/tag.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.ym(107195914, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  };
};

export default loadYandexMetrika;