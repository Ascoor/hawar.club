// src/App.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'; 
import 'animate.css'; 
import 'aos/dist/aos.css';

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Preloader from './Components/Preloader.jsx';
import Banner from './Components/Banner.jsx';
import BuildingOuter from './Components/BuildingOuter.jsx';
import MuscleSection from './Components/MuscleSection.jsx';
import ClassesSection from './Components/ClassesSection.jsx';
import Trainers from './Components/Trainers.jsx';
import Gallery from './Components/Gallery.jsx';
import CounterSection from './Components/CounterSection.jsx';
import NewsSection from './Components/NewsSection.jsx';
import VipEvents from './Components/VipEvents.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التحريك بالميلي ثانية
    });
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      console.log("تم إطلاق حدث التحميل");
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
        
      ) : (
        <>
          <Header />
          <Banner/>
          <BuildingOuter />
          <VipEvents />
          <MuscleSection />
          {/* <ClassesSection /> */}
          <Trainers />
          {/* <Gallery /> */}
          <CounterSection />
          {/* <NewsSection /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
