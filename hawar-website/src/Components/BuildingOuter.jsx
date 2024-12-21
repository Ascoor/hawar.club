import { useState } from "react";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import CounterBg from '../assets/images/building_bg_blue.png';
 import {sportsData} from '../Data';
const BuildingOuter = () => {
  const [visibleSports, setVisibleSports] = useState(4);

  const handleLoadMore = () => {
    setVisibleSports((prevVisible) => prevVisible + 4); // عرض 4 إضافية عند كل نقرة
  };
  return (
    <div
      className="py-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${CounterBg})` }}
    >
      
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-[1200px] mx-auto">
      
      <div className="container mx-auto px-4">
       
      <div className="relative flex justify-center items-center py-8 mb-12 rounded-header bg-gradient-to-r from-hawar-blue-darker  via-hawar-blue-dark   to-hawar-blue-darker  shadow-soft-orange">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-hawar-orange drop-shadow-xl">
          الأنشطة الرياضية
        </h1>
      </div>

          <div className="absolute inset-0 rounded-lg border-4 border-hawar-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"   data-aos="fade-up">
        {sportsData.slice(0, visibleSports).map((sport, index) => (
          <motion.div
              key={index}
              className="relative bg-hawar-blue-dark p-8 text-center  shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden rounded-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Border Effect */}

              {/* Icon */}
              <motion.figure
                className="mb-6 flex justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-1/3 sm:w-1/2 lg:w-40 mx-auto object-contain"
                  loading="lazy"
                />
              </motion.figure>

              {/* Content */}
              <div>
                <h4 className="text-2xl font-bold mb-4 text-hawar-orange group-hover:text-white transition-colors duration-300">
                  {sport.name}
                </h4>
                <p className="text-gray-300 text-lg group-hover:text-gray-100 transition-colors duration-300">
                  {sport.description}
                </p>
              </div>

              {/* Button */}
              <a
                href={sport.link}
                className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-orange-500 text-hawar-orange font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                <motion.span
                  className="ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaArrowRight />
                </motion.span>
                <span>عرض التفاصيل</span>
              </a>
            </motion.div>
          ))}
        </div>

          {/* زر عرض المزيد */}
          {visibleSports < sportsData.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-hawar-orange text-white font-bold rounded-full transition duration-300 hover:bg-hawar-blue hover:text-hawar-orange"
              >
                عرض المزيد
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildingOuter;
