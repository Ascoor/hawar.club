import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group bg-hawar-blue-dark rounded-header opacity-90 flex flex-col items-center justify-center p-6 shadow-lg transition-shadow duration-300 relative"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: '0 10px 20px rgba(251, 146, 33, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
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

      {/* Hidden Count */}
      <motion.div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-hawar-blue-darker bg-opacity-90 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <strong className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          {inView && hovered ? <CountUp end={counter.count} duration={3} /> : ''}
        </strong>
      </motion.div>

      {/* Label */}
      <small
        className="text-hawar-orange font-semibold text-sm sm:text-lg lg:text-xl mt-2"
      >
        {counter.label}
      </small>
    </motion.div>
  );
};

export default React.memo(Counter);
