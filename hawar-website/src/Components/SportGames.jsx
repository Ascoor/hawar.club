import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CounterBg from "../assets/images/building_bg_blue.png";
import { sportsData } from "../Data";

const SportGames = () => {
  const [visibleSports, setVisibleSports] = useState(4);

  const handleLoadMore = () => {
    setVisibleSports((prevVisible) => prevVisible + 4);
  };

  return (
    <section
      id="building"
      className="relative py-16 bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 37, 84, 0.9), rgba(23, 37, 84, 0.9)), url(${CounterBg})`,
      }}
    >
      <div className="container mx-auto px-6">
        {}
        <div className="mb-12 text-center">
          <div className="inline-block px-10 py-6    animate-lightSweep bg-gradient-to-b from-hawar-blue-darker via-hawar-blue-dark to-hawar-blue-darker shadow-glow rounded-header">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xs:text-xl   italic font-bold text-hawar-orange tracking-wide"
              data-aos="fade-in"
            >
              الألعاب الرياضية
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
              key={index}
              className="group relative p-4 sm:p-6 bg-hawar-blue-dark rounded-card shadow-lg hover:shadow-orange-glow transition-shadow duration-300 flex flex-col items-center justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.figure
                className="mb-4 w-full flex justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-32 h-32 object-contain"
                  loading="lazy"
                />
              </motion.figure>
              <h4 className="text-xl font-bold mb-2 text-hawar-orange group-hover:text-white transition-colors duration-300">
                {sport.name}
              </h4>
              <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 text-center">
                {sport.description}
              </p>
              <a
                href={sport.link}
                className="inline-flex items-center justify-center mt-4 px-6 py-3 border-2 border-orange-500 text-hawar-orange font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
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
        {visibleSports < sportsData.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-hawar-orange text-white font-bold rounded-full shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange transition-all duration-300"
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SportGames;