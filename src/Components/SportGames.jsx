import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SportGamesBg from '../assets/images/building_bg_blue.png';
import { sportsData } from '../Data';

const SportGames = () => {
  const [visibleSports, setVisibleSports] = useState(4);

  const handleLoadMore = () => {
    setVisibleSports((prevVisible) =>
      Math.min(prevVisible + 4, sportsData.length)
    );
  };

  return (
    <section
      id="building"
      className="relative py-16  bg-center text-white"
      style={{
        backgroundImage: `url(${SportGamesBg})`,
      }}
    >
      {}
      <div className="absolute inset-0 bg-hawar-blue-dark bg-opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {}
        <div className="mb-12 text-center">
          <div className="inline-block px-10 py-6 bg-gradient-to-b from-hawar-blue-darker via-hawar-blue-dark to-hawar-blue-darker shadow-orange-glow rounded-header">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xs:text-xl font-tajawal font-bold text-hawar-orange tracking-wide"
              data-aos="fade-in"
            >
              الأنشطة الرياضية
            </h1>
          </div>
        </div>

        {}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {sportsData.slice(0, visibleSports).map((sport, index) => (
            <motion.div
              key={sport.id || index}
              className="group relative p-6 bg-opacity-75 bg-hawar-blue-dark rounded-card shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-orange-glow flex flex-col items-center justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hawar-blue-dark opacity-20 animate-wave pointer-events-none"></div>

              {}
              <motion.figure
                className="mb-4 w-full flex justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sport.image}
                  alt={`صورة لـ ${sport.name}`}
                  className="w-32 h-32 object-contain rounded-full shadow-md"
                  loading="lazy"
                />
              </motion.figure>

              {}
              <h4 className="text-xl font-bold mb-2 text-hawar-orange group-hover:text-white transition-colors duration-300">
                {sport.name}
              </h4>

              {}
              <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 text-center">
                {sport.description}
              </p>

              {}
              <a
                href={sport.link}
                className="inline-flex items-center justify-center mt-4 px-6 py-3 border-2 border-orange-500 text-hawar-orange font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
                aria-label={`عرض المزيد عن ${sport.name}`}
              >
                <motion.span
                  className="ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaArrowRight />
                </motion.span>
                عرض التفاصيل
              </a>
            </motion.div>
          ))}
        </div>

        {}
        <div className="text-center mt-10">
          {visibleSports < sportsData.length ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-hawar-orange text-white font-bold rounded-full shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange transition-all duration-300"
            >
              عرض المزيد
            </button>
          ) : (
            <p className="text-gray-400 text-lg">
              تم عرض جميع الأنشطة الرياضية.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SportGames);