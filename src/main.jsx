import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Projetos from './pages/Projetos.jsx'
import Contato from './pages/Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<LandingPage />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/projetos' element={<Projetos />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
