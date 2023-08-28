import React from 'react';
import Header from '../components/Header/Header'
import MiniServices from '../components/MiniServices/MiniServices'
import Info from '../components/Info/Info'
import MiniReview from '../components/MiniReview/MiniReview'
import Order from '../components/Order/Order'
import About from '../components/About/About';
import IntroVideo from "../components/IntroVideo/IntroVideo";
import { Helmet } from 'react-helmet';



const Home = () => {
  return (
          <div>
            <Helmet>
              <title>
                الرئيسية | مركز الدكتور أحمد أحمد
              </title>
            </Helmet>
            
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

