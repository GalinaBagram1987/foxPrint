
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './sections/header.jsx';
import Home from './sections/home.jsx';
import AboutUs from './sections/aboutUs.jsx';
import Services from './sections/services.jsx';
import './App.css';
import Portfolio from './sections/portfolio.jsx';
import Contacts from './sections/contacts.jsx';
import Footer from './sections/footer.jsx';

const App = () => {
  return(
    <>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  )
}

export default App