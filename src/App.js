import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import Home from "./Home/Home";
//import Services from './services/Services'
import ServicesDetails from "./ServicesDetail/ServicesDetail";
import BuyServices from "./buy-service/BuyServices";
import RateServices from "./rate-services/RateServices";
import React, { Suspense, lazy } from "react";
import Footer from "./components/Footer/Footer";
import { FaWhatsappSquare ,FaPhoneSquareAlt } from "react-icons/fa";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
const Services = lazy(()=> import("./services/Services"));
const Home = lazy(()=> import("./Home/Home"));

function App() {

  return (
    <div>
      <div className='w-12 h-12 fixed bottom-10 right-5 cursor-pointer'>
              <FaPhoneSquareAlt size={40} color="green"/>
              <FaWhatsappSquare size={40} color="green"/>
            </div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Suspense> <Home /> </Suspense>} />
          <Route 
            path="/services" 
            element={<Suspense> <Services /> </Suspense>}/>
          <Route path="/services/:slug" element={<ServicesDetails />}/>
          <Route path="/buy-service" element={<BuyServices />}/>
          <Route path="/rate-services" element={<RateServices />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
