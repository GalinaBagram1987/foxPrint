
const loadYandexMetrika = () => {
   if (window.ym) return; // уже есть

  const script = document.createElement('script');
  script.textContent = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j=0; j<document.scripts.length; j++) {
        if (document.scripts[j].src === r) return;
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0];
      k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;
  document.head.appendChild(script);

  // Теперь можно смело вызывать ym, он будет в очереди
  window.ym(107195914, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
};

export default loadYandexMetrika;