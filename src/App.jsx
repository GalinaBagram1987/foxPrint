
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './sections/header.jsx';
import Home from './sections/home.jsx';
import './App.css';

const App = () => {
  return(
    <>
      <Header />
       <main style={{ paddingTop: '11.94rem' }}>
        <Home />
       </main>
    </>
  )
}

export default App