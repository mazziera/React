// style
import './App.css'

// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Nav from './components/Nav.jsx';

//pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ProductDetail from './pages/ProductDetail.jsx';


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

        {/* 4 - Rota Dinâmica */}
        <Route path= "/products/:id" element={ <ProductDetail />}/>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
