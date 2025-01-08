
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Mycomponents/Footer/Footer';
import Header from './Mycomponents/Header/Header';
import Navbar from './Mycomponents/Navmenu/Navbar';
import Home from './Mycomponents/Home/Home';
import About from './Mycomponents/About/About';
import Service from './Mycomponents/Service/Service';
import Contact from './Mycomponents/Contact/Contact';
import Gallery from './Mycomponents/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
