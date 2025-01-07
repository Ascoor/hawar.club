import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import CounterBg from '../assets/images/building_bg_blue.png';
import { counters } from '../Data';

const Counter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="counter-outer py-16 bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${CounterBg})`,
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <CounterBox
              key={counter.id || index}
              counter={counter}
              animationDelay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterBox = ({ counter, animationDelay }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // مراقبة لمرة واحدة فقط
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="
        bg-hawar-blue-dark 
        rounded-header 
        opacity-90 
        flex 
        flex-col 
        items-center 
        justify-center 
        p-6 
        shadow-lg 
        transition-shadow 
        duration-300"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: '0 10px 20px rgba(251, 146, 33, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {}
      <motion.figure
        className="mb-4"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={counter.image}
          alt={`أيقونة ${counter.label}`}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-hawar-orange rounded-header object-cover"
          loading="lazy"
        />
      </motion.figure>
      {}
      <strong
        className="
          counter 
          text-white 
          text-4xl 
          sm:text-5xl 
          lg:text-6xl 
          font-extrabold 
          leading-tight"
      >
        {inView ? <CountUp end={counter.count} duration={3} /> : '0'}
      </strong>
      {}
      <small
        className="
          text-hawar-orange 
          font-semibold 
          text-sm 
          sm:text-lg 
          lg:text-xl 
          mt-2"
      >
        {counter.label}
      </small>
    </motion.div>
  );
};

export default React.memo(Counter);
