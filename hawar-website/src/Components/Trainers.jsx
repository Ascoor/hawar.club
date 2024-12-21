import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import BuildingBgBlue from '../assets/images/building_bg _blue.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { trainers } from '../Data';
const Trainers = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
              <div className="px-4 ">
              <div
  className="bg-gradient-to-r from-hawar-blue-darker via-hawar-blue-dark to-hawar-blue-darker p-6 rounded-card opacity-90 relative"
  data-aos="fade-up"
>
  <figure className="relative m-4" data-aos="fade-down">
    <img
      src={trainer.image}
      alt={trainer.name}
      className="w-full h-auto shadow-soft-orange object-cover rounded-card"
      data-aos="fade-down"
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
