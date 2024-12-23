import { useState } from "react";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import CounterBg from '../assets/images/building_bg_blue.png';
import { sportsData } from '../Data';

const BuildingOuter = () => {
  const [visibleSports, setVisibleSports] = useState(4);

  const handleLoadMore = () => {
    setVisibleSports((prevVisible) => prevVisible + 4); // عرض 4 إضافية عند كل نقرة
  };

  return (
    <section
      className="
        bg-fixed bg-center bg-cover
        py-16 
        px-4
        font-arabic 
        relative
        overflow-hidden
      "
      style={{ backgroundImage: `url(${CounterBg})` }}
      id="building"  // لو احتجت استعماله في الربط الروتيني بالهيدر
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* العنوان بخلفية متدرجة وتأثير نص محفور ومضيء */}
        <div className="relative mb-16 w-full flex justify-center">
          {/* بورد العنوان */}
          <div className="relative z-10 bg-gradient-to-b shadow-glow rounded-[28%] from-hawar-blue-darker via-hawar-blue-darker to-hawar-blue-dark shadow-orange-glow  py-8 px-4 md:px-8 lg:px-16"        >
            {/* العنوان */}
            <h1 
               data-aos="fade-in"
            className="
              text-3xl 
              md:text-4xl
              font-bold
              lg:text-5xl
              text-hawar-orange-light
              
              opacity-80
              text-center
            ">
              الأنشطة الرياضية
            </h1>
          </div>
        </div>

        {/* الشبكة الرئيسية للأنشطة */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4" 
          data-aos="fade-up"
        >
          {sportsData.slice(0, visibleSports).map((sport, index) => (
            <motion.div
              key={index}
              className="
                group
                relative 
                bg-hawar-blue-dark
                p-6 md:p-8 
                text-center 
                shadow-lg
                hover:shadow-2xl
                transition-shadow 
                duration-300 
                overflow-hidden 
                rounded-card
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* صورة النشاط */}
              <motion.figure
                className="mb-4 md:mb-6 flex justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-1/2 sm:w-1/3 lg:w-40 mx-auto object-contain"
                  loading="lazy"
                />
              </motion.figure>

              {/* اسم النشاط والوصف */}
              <div>
                <h4 
                  className="
                    text-xl md:text-2xl 
                    font-bold 
                    mb-2 md:mb-4 
                    text-hawar-orange 
                    group-hover:text-white 
                    transition-colors 
                    duration-300
                  "
                >
                  {sport.name}
                </h4>
                <p 
                  className="
                    text-gray-300 
                    text-sm md:text-base 
                    group-hover:text-gray-100 
                    transition-colors 
                    duration-300
                  "
                >
                  {sport.description}
                </p>
              </div>

              {/* زر التفاصيل */}
              <a
                href={sport.link}
                className="
                  inline-flex 
                  items-center 
                  justify-center 
                  mt-4 md:mt-6 
                  px-4 md:px-6 
                  py-2 md:py-3 
                  border-2 
                  border-orange-500 
                  text-hawar-orange 
                  font-medium 
                  rounded-full 
                  transition 
                  duration-300 
                  hover:bg-orange-500 
                  hover:text-white
                "
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
              className="
                px-6 
                py-3 
                bg-hawar-orange 
                text-white 
                hover:bg-hawar-blue-dark
                font-bold 
                rounded-full 
                transition 
                duration-300 
                hover:bg-hawar-orange-
                hover:text-hawar-orange-light
              "
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildingOuter;
