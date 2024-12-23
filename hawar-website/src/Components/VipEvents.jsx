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
    <section
      className="py-12 bg-hawar-blue-darker bg-fixed bg-center bg-cover font-arabic"
      id="vip-events"
    >
      <div className="container mx-auto px-4">
        {/* Header with Navigation Buttons */}
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

        {/* Swiper Carousel */}
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
            {/* Event Image */}
<div className="relative w-full p-4 overflow-hidden ">
  <div className="relative w-full aspect-[16/9] rounded-[25%] shadow-xl overflow-hidden group"     data-aos="fade-down">
    <img
      src={event.image}
      alt={event.title}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 "
    data-aos="fade-down"
    />
    {/* Decorative Border */}
    <div className="absolute inset-0 border-[6px] border-hawar-blue-dark rounded-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"></div>
  </div>



                {/* Decorative Waves */}
                <div className="relative w-full text-white overflow-hidden rounded-[25%] " data-aos="fade-up">
                  <div className="relative w-full h-[300px] bg-gradient-to-t from-hawar-blue  to-w ">
                    {/* Wave Layers */}
                    <div className="absolute w-[540px] h-[700px] right-1/4 top-[100px] transform translate-x-1/6 -translate-y-1/4 bg-gradient-to-r from-hawar-blue-dark via-hawar-blue-darker to-hawar-blue-dark upacity-10 rounded-[60%] animate-wave delay-600"></div>
                    <div className="absolute w-[540px] h-[700px] left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-950 via-hawar-terq-darker  to-sky-900 opacity-30 rounded-[80%] animate-wave"></div>
                    <div className="absolute w-[540px] h-[700px] left-1/6 top-[60px] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-hawar-blue-dark via-hawar-blue-darker to-hawar-blue-dark opacity-30 rounded-[70%] animate-wave delay-300"></div>

                    {/* Text Overlay */}
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
         

                {/* Event Content */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VipEvents;
