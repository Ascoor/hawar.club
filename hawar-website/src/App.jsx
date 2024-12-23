import { useState, useEffect } from "react";
import "./App.css";
import "animate.css";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from "aos";    // استيراد مكتبة AOS

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Preloader from "./Components/Preloader.jsx";
import Banner from "./Components/Banner.jsx";
import BuildingOuter from "./Components/BuildingOuter.jsx";
import MuscleSection from "./Components/MuscleSection.jsx";
import Trainers from "./Components/Trainers.jsx";
import CounterSection from "./Components/CounterSection.jsx";
import VipEvents from "./Components/VipEvents.jsx";
import { FaArrowUp } from "react-icons/fa";
import AboutSection from "./Components/AboutSection.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [visible, setVisible] = useState(false);

  // دالة إظهار زر الرجوع للأعلى
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // دالة التمرير للأعلى مع عامل تسريع مخصص
  const scrollToTop = () => {
    const start = window.pageYOffset;
    const end = 0;
    const duration = 1500; // مدة التمرير
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;

      if (progress < 1) {
        // عامل تسريع مخصص (بطيء في البداية، سريع في المنتصف، بطيء في النهاية)
        const easing = cubicBezier(progress); 
        window.scrollTo(0, start - (start - end) * easing);
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, end);
      }
    };

    // مثال على دالة cubic-bezier (easeInOutCubic تقريبًا)
    const cubicBezier = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 1500); // يبدأ التلاشي بعد 1.5 ثانية

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // ينتهي التحميل بعد 2 ثانية

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // تشغيل مكتبة AOS
  useEffect(() => {
    AOS.init({ // يمكنك تمرير الإعدادات الافتراضية هنا
      duration: 1000,  // مدة الحركة الافتراضية
      offset: 100,     // المسافة قبل بدء الحركة
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <>
      {/* مكون التحميل */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Preloader />
        </div>
      )}

      {/* محتوى الصفحة */}
      {!isLoading && (
        <>
          <Header />

          {/* Banner Section */}
          <section id="banner" >
            <Banner />
          </section>
          <section id="about" >
          <AboutSection   />
          </section>

          {/* BuildingOuter Section */}
          <section id="building" >
            <BuildingOuter />
          </section>

          {/* MuscleSection */}
          <section id="muscle" >
            <MuscleSection />
          </section>

          {/* Trainers */}
          <section id="trainers" >
            <Trainers />
          </section>
          {/* VipEvents Section */}
          <section id="events" >
            <VipEvents />
          </section>


          {/* CounterSection */}
          <section id="counter" >
            <CounterSection />
          </section>
          <section id="footer" >

          <Footer  />
          </section>

          {/* زر الرجوع للأعلى */}
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
