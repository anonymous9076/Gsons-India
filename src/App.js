import './App.css';
import About from './Components/About';
import Carousle from './Components/Carousle';
import Catelog from './Components/Catelog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Team from './Components/Team';
import CardItems from './Components/CardItems'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar></Navbar>
    </>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<Carousle />}></Route>
        <Route path='/' element={<About />}></Route>
        <Route path='/' element={<Catelog />}></Route>
        <Route path='/' element={<Product />}></Route>
        <Route path='/' element={<Team />}></Route>
        <Route path='/' element={<Contact />}></Route>
      </Routes >
      <div className='app'>  
      <Carousle></Carousle>
        <About></About>
        <Catelog />
        <Product></Product>
        <Team></Team>
        <Contact></Contact>
        <Footer></Footer>
        <CardItems></CardItems>
      </div>
    </BrowserRouter >

  );
}

export default App;
