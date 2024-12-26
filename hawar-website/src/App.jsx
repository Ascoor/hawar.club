import { useState, useEffect } from "react";
import "./App.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaArrowUp } from "react-icons/fa";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Preloader from "./Components/Preloader.jsx";
import Banner from "./Components/Banner.jsx";
import SportGames from "./Components/SportGames.jsx";
import MuscleSection from "./Components/MuscleSection.jsx";
import Trainers from "./Components/Trainers.jsx";
import CounterSection from "./Components/CounterSection.jsx";
import VipEvents from "./Components/VipEvents.jsx";
import AboutSection from "./Components/AboutSection.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    const start = window.pageYOffset;
    const end = 0;
    const duration = 1500; 
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;

      if (progress < 1) {

        const easing = cubicBezier(progress); 
        window.scrollTo(0, start - (start - end) * easing);
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, end);
      }
    };

    const cubicBezier = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setIsFading(true), 3500);
    const loadingTimeout = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const sections = [
    { id: "banner", Component: Banner },
    { id: "about", Component: AboutSection },
    { id: "building", Component: SportGames },
    { id: "muscle", Component: MuscleSection },
    { id: "trainers", Component: Trainers },
    { id: "events", Component: VipEvents },
    { id: "counter", Component: CounterSection },
    { id: "footer", Component: [Footer] },
  ];

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Preloader />
        </div>
      )}

      {!isLoading && (
        <>
          <Header />
          {sections.map(({ id, Component }) => (
            <section id={id} key={id}>
              <Component />
            </section>
          ))}
          <Footer />
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-hawar-orange text-white rounded-full p-4 shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange transition-all duration-300 z-50 ${
              visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="الرجوع للأعلى"
          >
            <FaArrowUp className="h-5 w-5" />
          </button>
        </>
      )}
    </>
  );
};

export default App;