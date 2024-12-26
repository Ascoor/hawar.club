import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { eventNews } from "../Data";

const VipEvents = () => {
  const swiperRef = useRef(null);
  const [showFullText, setShowFullText] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleShowMore = (index) => {
    setShowFullText((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className="py-12 bg-hawar-blue-darker bg-fixed bg-center bg-cover font-arabic"
      id="vip-events"
    >
      <div className="container mx-auto px-4">
        {}
        <div className="flex items-center justify-between mb-8 border-b border-orange-500 pb-4">
          <h3 className="text-2xl font-semibold text-hawar-orange">أهم الأحداث</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="p-2 rounded-full bg-hawar-orange ml-2 text-white hover:bg-hawar-blue-dark hover:text-hawar-orange transition duration-300 transform hover:scale-110"
              aria-label="الشريحة السابقة"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="p-2 rounded-full bg-hawar-orange text-white hover:bg-hawar-blue-dark hover:text-hawar-orange transition duration-300 transform hover:scale-110"
              aria-label="الشريحة التالية"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {}
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
          {eventNews.map((event, index) => (
            <SwiperSlide key={index}>
            {}
<div className="relative w-full p-4 overflow-hidden ">
  <div className="relative w-full aspect-[16/9] shadow-blue-glow rounded-[25%]  overflow-hidden group"     data-aos="fade-down">
    <img
      src={event.image}
      alt={event.title}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 "
    data-aos="fade-down"
    />
    {}
    <div className="absolute inset-0 border-[6px] border-hawar-blue-dark rounded-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"></div>
  </div>

                {}
                <div className="relative w-full text-white overflow-hidden shadow-blue-glow mt-4 rounded-[25%] " data-aos="fade-up">
                  <div className="relative w-full h-[300px] bg-gradient-to-t from-hawar-blue  to-w ">
                    {}
              <div className="absolute w-[540px] h-[700px] left-1/2 top-[60px]  transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-hawar-blue-dark via-hawar-blue-dark to-hawar-blue-dark opacity-50 shadow-led-orange rounded-[70%] animate-wave delay-300"></div>
                    <div className="absolute w-[540px] h-[700px] left-1/6 top-[50px] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-hawar-blue-darker  via-hawar-blue-dark to-hawar-blue-dark opacity-40  rounded-[80%] animate-wave delay-300"></div>
                    <div className="absolute w-[540px] h-[700px] right-1/2 top-[50px]  transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b  from-hawar-blue-dark  via-hawar-blue-darker to-hawar-blue-dark opacity-30 rounded-[90%] shadow-led-orange animate-wave delay-300"></div>

                    {}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-white drop-shadow-lg">
                          {event.title.length > 50
                            ? showFullText.includes(index)
                              ? event.title
                              : `${event.title.substring(0, 50)}...`
                            : event.title}
                          {event.title.length > 50 && (
                            <button
                              onClick={() => toggleShowMore(index)}
                              className="text-hawar-orange text-sm hover:underline ml-2"
                            >
                              {showFullText.includes(index) ? "عرض أقل" : "عرض المزيد"}
                            </button>
                          )}
                        </h4>
                      </div>
                    </div>
                <div className="p-4 relative z-10">
                  <div className="flex justify-center space-x-2 mb-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 transform -skew-x-8 rounded-md shadow">
                      {event.date}
                    </span>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 transform skew-x-12 rounded-md shadow">
                      {event.time}
                    </span>
                  </div>
                </div>         </div>

                {}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VipEvents;