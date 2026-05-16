import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage.jsx';
import PrivacyPolicy from './pages/privatePolicyPage.jsx';
import CookieConsentComp from './components/cookieConsent.jsx';
import Layout from './layout.jsx';

const App = () => {
  return(
    <>
      <CookieConsentComp />
        <Routes>
          <Route path="/" element={<Layout><MainPage /></Layout>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path='/services' element={<Layout><MainPage /></Layout>} />
          <Route path='/aboutUs' element={<Layout><MainPage /></Layout>} />
          <Route path='/portfolio' element={<Layout><MainPage /></Layout>} />
          <Route path='/contacts' element={<Layout><MainPage /></Layout>} />
        </Routes>
    </>
  )
}

export default App