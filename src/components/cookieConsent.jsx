import loadYandexMetrika from "./yandexMetrica.jsx";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import CookieConsentBanner from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CookieConsentComp = () => {
  const { t } = useTranslation();
  const location = useLocation();
  // дано ли согласие
  const [consentGiven, setConsentGiven] = useState(() => 
    document.cookie.includes('mySiteCookieConsent')
  );
  // Загрузка метрики после того, как пользователь дал согласие
  useEffect(() => {
    if (consentGiven) {
      loadYandexMetrika();
    }
  }, [consentGiven]);

  const handleAccept = () => {
    setConsentGiven(true); // изменит состояние, вызовет useEffect, кот загрузит метрику
  };

  // Не показываем баннер на странице политики
  if (location.pathname === '/privacy') {
    return null;
  };

  return (
    <CookieConsentBanner
      location="bottom"                    // баннер снизу
      containerClasses='cookie-banner-top'
      buttonText={t('cookie.accept')}
      enableDeclineButton={false}
      cookieName='mySiteCookieConsent'
      expires={365}
      onAccept={handleAccept}
      buttonStyle={{ background: '#4CAF50', color: 'white', fontSize: '14px' }}
    >
      {t('cookie.info')}
      <Link to="/privacy" style={{ color: '#f5e042' }}>{t('cookie.href')}</Link>
    </CookieConsentBanner>
  );
};

export default CookieConsentComp