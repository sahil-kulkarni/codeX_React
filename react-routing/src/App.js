import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from './Component/Home/Home.js';
import Features from './Component/Features/Features.js';
import Services from './Component/Services/Services.js';
import Testimonials from './Component/Testimonials/Testimonials.js';
import Contact from './Component/contact/contacts.js';
import Footer from "./Component/Footer.js";


function App() {
  return (
    <>

    <div>
      <BrowserRouter>  
          <Navbar/>
      <Routes>
  
        <Route  path='/' Component={Home}/>
        <Route  path='/Features' Component={Features}/>
        <Route  path='/Service' Component={Services}/>
        <Route  path='/Testimonials' Component={Testimonials}/>
        <Route  path='/Contact' Component={Contact}/>
      </Routes>
      <Footer/>

      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
