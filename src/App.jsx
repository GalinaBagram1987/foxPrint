
import HomePage from './pages/homePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToastProvider from './components/toastProvider.jsx';
import PrivacyPolicy from './pages/privatePolicyPage.jsx';

const App = () => {
  return(
    <>
      <ToastProvider />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
    </>
  )
}

export default App