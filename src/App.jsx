import { useState, useEffect, useRef } from 'react';
import './App.css';
import AOS from 'aos';
import { FaArrowUp } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useScrollToTop } from './Hooks/useScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import Banner from './Components/Banner';
import SportGames from './Components/SportGames';
import MuscleSection from './Components/MuscleSection';
import Trainers from './Components/Trainers';
import CounterSection from './Components/CounterSection';
import VipEvents from './Components/VipEvents';
import AboutSection from './Components/AboutSection';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const { visible, scrollToTop } = useScrollToTop();
  const aosInitialized = useRef(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        duration: 1000,
        offset: 100,
        easing: 'ease-in-out',
        once: true,
      });
      aosInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setIsFading(true), 3500);
    const loadingTimeout = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Handle footer visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition = footerRef.current.getBoundingClientRect();
        const isFooterInView =
          footerPosition.top < window.innerHeight && footerPosition.bottom > 0;
        setIsFooterVisible(isFooterInView);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'banner', Component: Banner },
    { id: 'about', Component: AboutSection },
    { id: 'building', Component: SportGames },
    { id: 'muscle', Component: MuscleSection },
    { id: 'trainers', Component: Trainers },
    { id: 'counter', Component: CounterSection },
    { id: 'events', Component: VipEvents },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "نادي الحوار",
            "url": "https://hawar.club",
            "description": "نادي الحوار يقدم أنشطة رياضية وثقافية واجتماعية لجميع الأعمار.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "المنصورة",
              "addressCountry": "EG"
            }
          }
          `}
        </script>
      </Helmet>

      {isLoading ? (
        <div
          className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Preloader />
        </div>
      ) : (
        <>
          <Header />

          {sections.map(({ id, Component }) => (
            <section id={id} key={id}>
              <Component />
            </section>
          ))}

          <div ref={footerRef} id="footer">
            <Footer />
          </div>

          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-hawar-blue-dark text-white border-2 border-hawar-orange rounded-full p-4 shadow-lg transition-transform transform duration-300 ease-in-out ${
              visible && !isFooterVisible
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            } hover:bg-hawar-orange hover:text-hawar-blue-dark hover:scale-110 z-30`}
            aria-label="الرجوع للأعلى"
          >
            <FaArrowUp className="h-5 w-5" />
          </button>
        </>
      )}
    </HelmetProvider>
  );
};

export default App;
