import loadYandexMetrika from "./yandexMetrica.jsx";
import { useEffect, useState } from "react";
import CookieConsentBanner from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CookieConsentComp = () => {
  // дано ли согласие
  const [consentGiven, setConsentGiven] = useState(false);
  // Эффект, который сработает при изменении consentGiven
  const { t } = useTranslation();
  useEffect(() => {
    if (consentGiven) {
      loadYandexMetrika();
    }
  }, [consentGiven]);
  const handleAccept = () => {
    setConsentGiven(true);

    // Не показываем баннер на странице политики
    if (location.pathname === '/privacy') {
      return null;
    }
  };
  return (
    <CookieConsentBanner
      location="none"                    // баннер сверху
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