import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../sections/header';
import Home from '../sections/home';
import AboutUs from '../sections/aboutUs';
import Services from '../sections/services';
import Portfolio from '../sections/portfolio';
import Contacts from '../sections/contacts';
import Footer from '../sections/footer';
import ScrollToTop from '../components/scrollToTop';
import '../App.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <Portfolio />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default HomePage;