
import React, { useState } from 'react'

import './App.css'; 
import 'animate.css';


import Nav from './Components/NewsSection.jsx'
import About from './Components/CounterSection.jsx'
import Services from './Components/Services'
import Client from './Components/Client'
import Gallery from './Components/Gallery'
import TeamMembers from './Components/TeamMembers'
import Offer from './Components/Offer'
import TimeSchedule from './Components/TimeSchedule'
import Contact from './Components/Contact'
import Trainers from './Components/Trainers'
import Footer from './Components/Footer'
import HeroSection from './Components/Banner.jsx'
import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx';
import BuildingOuter from './Components/BuildingOuter.jsx';
import FeatureOuter from './Components/FeatureOuter.jsx';
import CounterSection from './Components/CounterSection.jsx';
import NewsSection from './Components/NewsSection.jsx';

const App = () => {
  const [nav, setNav] = useState(false);

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 405) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  return (
    
    <>
   
       <Header />
       <Banner/>
       <BuildingOuter/>
       <FeatureOuter />
       <TimeSchedule />
       <Trainers />
       <Gallery/>
       <CounterSection />
       <NewsSection />
       <Footer />
        <a href="#" className="scroll-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a> 

      
        
    </>
  );
};


export default App