import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-white flex items-center justify-center ${isLoading ? '' : 'hidden'}`}
      >
        {isLoading && <Preloader />}
      </div>
      {!isLoading && (
        <>
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
