
import HomePage from './pages/homePage.jsx';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/privatePolicyPage.jsx';
import CookieConsentComp from './components/cookieConsent.jsx';

const App = () => {
  return(
    <>
      <CookieConsentComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
    </>
  )
}

export default App