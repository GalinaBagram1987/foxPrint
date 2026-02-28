
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './sections/header.jsx';
import Home from './sections/home.jsx';
import BackgrBlock from './sections/backgrBlock.jsx';
import AboutUs from './sections/aboutUs.jsx';
import Services from './sections/services.jsx';
import './App.css';

const App = () => {
  return(
    <>
      <Header />
      <Home />
      <BackgrBlock />
      <AboutUs />
      <Services />

    </>
  )
}

export default App