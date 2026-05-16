import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage.jsx';
import PrivacyPolicy from './pages/privatePolicyPage.jsx';
//import Services from './sections/services.jsx';
//import AboutUs from './sections/aboutUs.jsx';
//import Portfolio from './sections/portfolio.jsx';
//import Contacts from './sections/contacts.jsx';
import CookieConsentComp from './components/cookieConsent.jsx';
import Layout from './layout.jsx';

const App = () => {
  return(
    <>
      <CookieConsentComp />
        <Routes>
          <Route path="/" element={<Layout><MainPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path='/services' element={<Layout><MainPage /></Layout>} />
          <Route path='/aboutUs' element={<Layout><MainPage /></Layout>} />
          <Route path='/portfolio' element={<Layout><MainPage /></Layout>} />
          <Route path='/contacts' element={<Layout><MainPage /></Layout>} />
        </Routes>
    </>
  )
}

export default App