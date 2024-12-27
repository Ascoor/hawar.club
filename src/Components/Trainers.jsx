import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';

import BuildingBgBlue from '../assets/images/building_bg _blue.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { trainers } from '../Data';

const Trainers = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
        <div
          className="relative bg-gradient-to-b from-hawar-blue-darker to-hawar-blue bg-cover bg-center text-white py-16 px-4 lg:px-12 overflow-hidden"
          style={{ backgroundImage: `url(${BuildingBgBlue})` }}
          id="muscle"
        >
                <div className="absolute inset-0 bg-hawar-blue-dark bg-opacity-40"></div>
 
                <div className="container mx-auto relative z-10">
        <div className="head flex items-center justify-between mb-8 border-b border-hawar-orange">
          <h3 className="text-hawar-orange text-xl font-semibold">
            لدينا أفضل المدربين
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="
                bg-hawar-orange 
                text-white 
                p-2 
                ml-2
                rounded-full 
                hover:bg-hawar-blue-dark 
                hover:text-hawar-orange 
                transition
              "
              aria-label="عرض الشريحة السابقة"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="
                bg-hawar-orange 
                text-white 
                p-2 
                rounded-full 
                hover:bg-hawar-blue-dark 
                hover:text-hawar-orange 
                transition
              "
              aria-label="عرض الشريحة التالية"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
          {trainers.map((trainer, index) => (
         <SwiperSlide key={index}>
         <div className="px-4">
           <div
             className="
               m-2 
               p-2 
               relative 
               shadow-soft-orange
               rounded-header
               opacity-90 
               w-full 
               bg-multi-gradient
               transition-transform 
               duration-300 
               hover:scale-105
               overflow-hidden
             "
             data-aos="fade-up"
           >
             {/* البرواز العلوي مع تأثير الإضاءة */}
             <div
               className="
                 absolute 
                 top-0 
                 left-0 
                 w-full 
                 h-1/2 
                 bg-light-gradient 
                 animate-lightSweep
                 rounded-header 
                 pointer-events-none
               "
               style={{
                 backgroundImage:
                   'linear-gradient(to left, rgba(251, 146, 33, 0.8), rgba(255, 255, 255, 0))',
                 backgroundSize: '200% 100%', // تفعيل حركة الإضاءة
               }}
             ></div>
       
             <figure className="relative m-4" data-aos="flip-up">
               <img
                 src={trainer.image}
                 alt={trainer.name}
                 className="
                   w-full 
                   h-auto 
                   object-cover 
                   rounded-card 
                   shadow-led-orange
                 "
                 data-aos="flip-up"
               />
             </figure>
             <h4 className="text-xl font-semibold mt-4 text-center">
               <a
                 href="/classes-detail.html"
                 className="text-white font-bold hover:text-hawar-orange transition"
               >
                 {trainer.name}
               </a>
             </h4>
           </div>
         </div>
       </SwiperSlide>
       
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trainers;
