import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/home.tsx'
import Practice from './pages/practice-advice/practice-advice.tsx'
import ClientsSay from './pages/clients-say/clients-say.tsx'
import MeetAttorneys from './pages/meet-attorneys/meet-attorneys.tsx'
import Weare from './pages/we-are/we-are.tsx'
import Contact from './pages/contact/contact.tsx'
import Footer from './pages/footer/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Practice />
    <Weare />
    <ClientsSay />
    <MeetAttorneys />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
