import './App.css';
import About from './Components/About';
import Carousle from './Components/Carousle';
import Catelog from './Components/Catelog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Carousle></Carousle>
      <About></About>
      <Catelog></Catelog>
      <Product></Product>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
