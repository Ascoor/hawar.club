// src/Components/BuildingOuter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import KarateImage from '../assets/images/karate.png'; // صورة تعبر عن نشاط الكاراتيه
import SwimmingImage from '../assets/images/swimming.png'; // صورة تعبر عن نشاط السباحة
import TennisImage from '../assets/images/tennis.png'; // صورة تعبر عن نشاط التنس
import BuildingBg from '../assets/images/building_bg.png'; // خلفية الصفحة
import { FaArrowRight } from 'react-icons/fa';

const BuildingOuter = () => {
  return (
    <div
      className="building-outer py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${BuildingBg})` }}
  
    >
      <div className="container mx-auto">
        <div className="building-list relative mt-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* صندوق الكاراتيه */}
            <motion.div
              className="building-box bg-white p-10 text-center rounded-lg shadow-lg flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <figure className="mb-6 flex justify-center">
                  <img
                    src={KarateImage}
                    alt="الكاراتيه في نادي الحوار"
                    className="w-1/5 sm:w-1/3 mx-auto object-contain"
                    loading="lazy"
                  />
                </figure>
                <h4 className="text-2xl font-bold mb-4">الكاراتيه</h4>
                <p className="text-gray-600">
                  يقدم نادي الحوار تدريبات احترافية في الكاراتيه، مع مشاركات متميزة في البطولات المحلية والدولية.
                </p>
              </div>
              <a
                href="karate-detail.html"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                <motion.span
                  className="ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaArrowRight />
                </motion.span>
                عرض التفاصيل
              </a>
            </motion.div>

            {/* صندوق السباحة */}
            <motion.div
              className="building-box bg-white text-hawar-orange p-10 text-center rounded-lg shadow-lg flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <figure className="mb-6 flex justify-center">
                  <img
                    src={SwimmingImage}
                    alt="السباحة في نادي الحوار"
                    className="w-1/5 sm:w-1/4 mx-auto object-contain"
                    loading="lazy"
                  />
                </figure>
                <h4 className="text-2xl font-bold mb-4">السباحة</h4>
                <p className="text-gray-600">
                  يضم النادي حمامات سباحة حديثة تناسب جميع الأعمار وتستضيف دورات تدريبية وبطولات متنوعة.
                </p>
              </div>
              <a
                href="swimming-detail.html"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                <motion.span
                  className="ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FaArrowRight />
                </motion.span>
                عرض التفاصيل
              </a>
            </motion.div>

            {/* صندوق التنس */}
            <motion.div
              className="building-box bg-white p-10 text-center rounded-lg shadow-lg flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <figure className="mb-6 flex justify-center">
                  <img
                    src={TennisImage}
                    alt="التنس في نادي الحوار"
                    className="w-1/5 sm:w-1/4 mx-auto object-contain"
                    loading="lazy"
                  />
                </figure>
                <h4 className="text-2xl font-bold mb-4">التنس</h4>
                <p className="text-gray-600">
                  استمتع بملاعب التنس ذات المواصفات العالمية، مع دورات تدريبية مناسبة لجميع الأعمار.
                </p>
              </div>
              <a
                href="tennis-detail.html"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                <motion.span
                  className="ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <FaArrowRight />
                </motion.span>
                عرض التفاصيل
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingOuter;
