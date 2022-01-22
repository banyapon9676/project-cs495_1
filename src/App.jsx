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
import { RefrePage } from './pages/RefrePage'
import { ProductPage } from './pages/ProductPage'
import { BedPage } from './pages/BedPage'
import { WardrobePage } from './pages/WardrobePage'
import { SofaPage } from './pages/SofaPage'
import { StoragePage } from './pages/StoragePage'
import { DeskPage } from './pages/DeskPage'
import { DiningroomPage } from './pages/DiningroomPage'


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
            <Route path='/refer' element={<RefrePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/bed' element={<BedPage />} />
            <Route path='/wardrobe' element={<WardrobePage />} />
            <Route path='/sofa' element={<SofaPage />} />
            <Route path='/storage' element={<StoragePage />} />
            <Route path='/desk' element={<DeskPage />} />
            <Route path='/diningroom' element={<DiningroomPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
