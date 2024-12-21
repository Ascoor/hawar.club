import { useEffect, useRef, useState } from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
  import { eventNews } from '../Data';
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
      <div className="py-12 bg-fixed bg-hawar-blue-darker " >
              <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 mx-4 border-b border-orange-500 pb-4">
  <h3 className="text-2xl font-semibold text-hawar-orange">أهم الأحداث</h3>
  <div className="flex space-x-2 mt-4">
    <button
      onClick={() => swiperRef.current.slidePrev()}
      className="p-2 ml-2 rounded-full bg-orange-500 text-white hover:bg-blue-800 hover:text-orange-500 transition duration-300"
      aria-label="Previous Slide"
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
    <button
      onClick={() => swiperRef.current.slideNext()}
      className="p-2 rounded-full bg-orange-500 text-white hover:bg-blue-800 hover:text-orange-500 transition duration-300"
      aria-label="Next Slide"
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
  </div>
</div>

  
          <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
      
  {eventNews.map((event, index) => (
    <SwiperSlide key={index}> 
    {/* الكرت الأساسي */}
    <div
      className="relative mx-auto bg-gray-900 text-white rounded-card shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      {/* الصورة */}
      <div className="relative  w-full h-64 overflow-hidden">
      <img
        className="w-full h-full image-cover "
        src={event.image}
        alt="Event"
      />
    </div>

    {/* النصوص مع الأمواج */}
    <div className="relative w-full text-white overflow-hidden" data-aos="fade-up">
      {/* الأمواج كخلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[450px] h-[600px] opacity-70 left-1/2 -translate-x-1/2 rounded-full wave"></div>
        <div className="absolute w-[450px] h-[650px] opacity-70 left-1/2 -translate-x-[42%] rounded-full wave wave-2"></div>
        <div className="absolute w-[500px] h-[500px] opacity-50 right-1/3 translate-x-1/3 -translate-y-[40%] rounded-full wave wave-3"></div>
      </div>

      {/* المحتوى النصي */}
      <div className="p-4 relative z-10">
        {/* التاريخ والوقت */}
        <div className="flex justify-center space-x-2 mb-2">
          <span className="date bg-orange-500 text-white text-xs px-2 py-1 transform -skew-x-8 rounded-md shadow">
            {event.date}
          </span>
          <span className="time bg-blue-500 text-white text-xs px-2 py-1 transform skew-x-12 rounded-md shadow">
            {event.time}
          </span>
        </div>

        {/* العنوان */}
        <h4 className="text-lg font-semibold mb-4">
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
  </div> 
</SwiperSlide>


  ))}
</Swiper>

        </div>
      </div>
    );
  };
  
  export default VipEvents;