import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OptionOne from './components/OptionOne/OptionOne'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/option/one' element={<OptionOne />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
