import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
