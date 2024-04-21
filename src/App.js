import './App.css';
import About from './Components/About';
import Catelog from './Components/Catelog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import AllItems from './Components/AllItems'
import Team from './Components/Team';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar></Navbar>
      </>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Catelog' element={<Catelog />}></Route>
        <Route path='/Products' element={<Product />}></Route>
        <Route path='/Team' element={<Team />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/AllItems' element={<AllItems />}></Route>

      </Routes >
      <div className='app'>
        <Footer></Footer>
      </div>
    </BrowserRouter >

  );
}

export default App;
