import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

// Pages
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ConntactPage } from './pages/ConntactPage'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='render-pages'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ConntactPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
