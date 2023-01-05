import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Cardpayment from './components/Cardpayment/Cardpayment';

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Hero/> */}
    <Cardpayment/>
    <Footer/>
    </div>
  );
}

export default App;
