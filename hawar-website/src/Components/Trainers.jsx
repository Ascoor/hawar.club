import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import trainer1 from '../assets/gym/trainer-1.jpg';
import trainer2 from '../assets/gym/trainer-2.jpg';
import trainer3 from '../assets/gym/trainer-3.jpg';
import trainer4 from '../assets/gym/trainer-4.jpg';
import trainer5 from '../assets/gym/trainer-5.jpg';
import trainer6 from '../assets/gym/trainer-6.jpg';
import trainer7 from '../assets/gym/gym-team.jpg';
import trainer8 from '../assets/gym/gym-team2.jpg';

import BuildingBgBlue from '../assets/images/building_bg _blue.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Trainers = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const trainers = [
    { image: trainer7, name: 'Trainers El Hawar TechnoGym' },
    { image: trainer1, name: 'Ahmed Raafat' },
    { image: trainer2, name: 'COACH : Noha Adel' },
    { image: trainer3, name: 'Nourhan Akll' },
    { image: trainer4, name: 'Ahmed Ebrahim' },
    { image: trainer5, name: 'Aya Helal' },
    { image: trainer6, name: 'Shady El Zeky' },
    { image: trainer8, name: 'Trainers El Hawar TechnoGym' },
  ];

  return (
    <div
      className=" py-12 bg-bottom bg-cover bg-fixed"
      style={{ backgroundImage: `url(${BuildingBgBlue})` }}
    >
      <div className="container mx-auto px-4">
        <div className="head flex items-center justify-between mb-8 border-b border-hawar-orange">
          <h3 className="text-hawar-orange text-3xl font-semibold">
            لدينا أفضل المدربين
          </h3>
          <div className="flex items-center mb-4 space-x-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="bg-hawar-orange text-white ml-2 p-2 rounded-full hover:bg-hawar-blue-dark hover:text-hawar-orange transition"
              aria-label="Next Slide"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="bg-hawar-orange text-white p-2 rounded-full hover:bg-hawar-blue-dark hover:text-hawar-orange transition"
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
        >
          {trainers.map((trainer, index) => (
            <SwiperSlide key={index}>
              <div className="px-4">
                <div
                  className="relative feature-box bg-white p-6 rounded-lg shadow-md"
                  data-aos="fade-up"
                >
                  <figure className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </figure>
                  <h4 className="text-xl font-semibold mt-4 text-center">
                    <a
                      href="/classes-detail.html"
                      className="hover:text-hawar-orange transition"
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
