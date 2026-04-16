const loadYandexMetrika = () => {
  if (window.ym) return;
  const script = document.createElement('script');
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  script.async = true;
  script.onload = () => {
    window.ym(107195914, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  };
  document.head.appendChild(script);
};





export default loadYandexMetrika;