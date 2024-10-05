import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Events from "./components/Events.jsx"
import AboutUs from "./components/About/AboutUs.jsx"
import ContactUs from "./components/Contact/ContactUs.jsx"
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {

  return (
    <Router>
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App
