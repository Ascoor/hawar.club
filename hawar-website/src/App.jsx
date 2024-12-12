import { useState, useEffect } from 'react';
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });

    // Detect if the device is desktop
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // اعتبار الشاشة "سطح مكتب" إذا كان العرض 1024 بكسل أو أكثر
    };

    handleResize(); // Detect on first load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const loadComponents = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // تأخير إضافي لمحاكاة التحميل
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
        <>
          <Preloader />
          {isDesktop && (
            <>
              {/* عرض محتوى الموقع مع مكون التحميل على سطح المكتب */}
              <Header />
              <Banner />
              <BuildingOuter />
              <VipEvents />
              <MuscleSection />
              <Trainers />
              <CounterSection />
              <Footer />
            </>
          )}
        </>
      ) : (
        <>
          {/* عرض الموقع بشكل طبيعي بعد اكتمال التحميل */}
          <Header />
          <Banner />
          <BuildingOuter />
          <VipEvents />
          <MuscleSection />
          <Trainers />
          <CounterSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
