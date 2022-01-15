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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
