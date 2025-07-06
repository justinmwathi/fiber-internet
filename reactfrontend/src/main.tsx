import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './pages/About/main.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/services"/>
      <Route path="/contact-us"/>
      </Routes>
    </div>
    </Router>
  </StrictMode>,
)
