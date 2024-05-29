// style
import './App.css'

// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

//components
import Nav from './components/Nav.jsx';

function App() {

  return (
     <>
     <h1>React Router</h1>

     <BrowserRouter>
     {/* Linkando as paginas */}
      <Nav />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path= "/about" element= {<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
