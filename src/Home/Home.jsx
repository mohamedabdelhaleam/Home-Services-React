import React from 'react';
import Header from '../components/Header/Header'
import MiniServices from '../components/MiniServices/MiniServices'
import Info from '../components/Info/Info'
import MiniReview from '../components/MiniReview/MiniReview'
import Order from '../components/Order/Order'
import About from '../components/About/About';
import IntroVideo from "../components/IntroVideo/IntroVideo";



const Home = () => {
  return (
          <div>
            
            <Header />
            <About />
            <MiniServices />
            <Info />
            <MiniReview />
            <IntroVideo />
            <Order />
          </div>
  );
}

export default Home;

