import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MyFooter from './components/Footer/Footer'
import MyRouter from './components/Router/MyRouter'
import TitleImg from './components/Header/TitleImg/TitleImg';
import NavBar from './components/Header/NavBar/NavBar';

// Librería de animación AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButtonUp from './components/ButtonUp/ButtonUp';

function App() {
  // Inicializamos AOS
  AOS.init({
    easing: 'ease-out-sine',
    duration: 600
  });

  return (
    <div className='App'>
      <BrowserRouter>
        <TitleImg />
        <NavBar />
        <MyRouter />
        <MyFooter />
        <ButtonUp />
      </BrowserRouter>
    </div>
  )
}

export default App
