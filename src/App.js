import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import Home from "./Home/Home";
//import Services from './services/Services'
import ServicesDetails from "./ServicesDetail/ServicesDetail";
import BuyServices from "./buy-service/BuyServices";
import RateServices from "./rate-services/RateServices";
import React, { Suspense, lazy, useState } from "react";
import Footer from "./components/Footer/Footer";
import { FaWhatsappSquare ,FaPhoneSquareAlt } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import AboutUs from "./About-Us/AboutUs";
const Services = lazy(()=> import("./services/Services"));
const Home = lazy(()=> import("./Home/Home"));

function App() {
  const [isHide,setIsHide] = useState(false)

  const handleContact =(e)=>{
    e.preventDefault();
    setIsHide(!isHide)

  }

  return (
    <div>
      <div className='w-12 fixed bottom-10 right-7 cursor-pointer h-[40px] '>
                            <div className=" absolute bottom-4 z-50 bg-green-500 rounded-md  p-2"><BiSolidMessageDetail size={35} onClick={handleContact} color="white" />
                    </div>
              <div className={isHide ? " absolute bottom-20 transition-all ease-in-out duration-150 bg-green-500  p-2 rounded-full flex":" absolute bottom-4 transition-all ease-in-out duration-150"}><FaPhoneSquareAlt size={35}        color="white" /></div>
              <div className={isHide ? " absolute bottom-36 transition-all ease-in-out duration-150 bg-green-500  p-2 rounded-full flex":" absolute bottom-4 transition-all ease-in-out duration-150"}><FaWhatsappSquare size={35}        color="white" /></div>
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
          <Route path="/about-us" element={<AboutUs />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
