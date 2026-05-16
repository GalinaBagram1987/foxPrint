import Header from './sections/header.jsx'
import Footer from './sections/footer.jsx'
import ScrollToTop from './components/scrollToTop.jsx'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
  
};

export default Layout;