import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './pages/About/main.tsx';
import OurServices from './pages/Our Services/main.tsx';
import ContactUs from './pages/Contact Us/main.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/services" element={<OurServices/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </div>
    </Router>
  </StrictMode>,
)
