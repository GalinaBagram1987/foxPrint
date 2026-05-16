import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from '../sections/home';
import AboutUs from '../sections/aboutUs';
import Services from '../sections/services';
import Portfolio from '../sections/portfolio';
import Contacts from '../sections/contacts';
import '../App.css';

const mainPage = () => {
  return (
    <>
      <Home />
      <Services />
      <AboutUs />
      <Portfolio />
      <Contacts />
    </>
  )
}

export default mainPage;