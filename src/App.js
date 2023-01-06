import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Cardpayment from './components/Cardpayment/Cardpayment';
import Personaldetails from './components/Personaldetails/Personaldetails';
import Login from './components/Login/Login';
import Routing from './components/Routing/Routing';


function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Hero/> */}
    {/* <Cardpayment/> */}
    {/* <Personaldetails/> */}
    {/* <Login/> */}
    <Routing/>
    <Footer/>
    </div>
  );
}

export default App;
