// src/App.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'; 
import 'animate.css'; 

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Preloader from './Components/Preloader.jsx';
import Banner from './Components/Banner.jsx';
import BuildingOuter from './Components/BuildingOuter.jsx';
import MuscleSection from './Components/MuscleSection.jsx';
import Trainers from './Components/Trainers.jsx';
import CounterSection from './Components/CounterSection.jsx';
import VipEvents from './Components/VipEvents.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
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

  // دالة لتحميل المكونات
  const loadComponents = async () => {
    // هنا يمكنك استخدام Promise أو أي دالة تتعلق بتحميل المكونات
    await new Promise((resolve) => setTimeout(resolve, 2000)); // محاكاة التحميل
    setLoadingComplete(true);
  };

  useEffect(() => {
    if (!isLoading) {
      loadComponents();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading || !loadingComplete ? (
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
