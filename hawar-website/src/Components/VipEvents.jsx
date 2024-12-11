import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import News1 from "../assets/images/News1.png";
import News2 from "../assets/images/News2.jpg";
import News3 from "../assets/images/News3.jpg";
import News4 from "../assets/images/News4.jpg";
import News5 from "../assets/images/News5.jpg";
import News6 from "../assets/images/News6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const VipEvents = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [showFullText, setShowFullText] = useState([]);

  const toggleShowMore = (index) => {
    setShowFullText((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  const featureClasses = [
    {
      image: News1,
      date: "أغسطس 2021",
      time: "10:00 م",
      title:
        "افتتاح المرحلة الجديدة لتوسعة نادي الحوار الرياضي بالمنصورة، والتي شملت تطوير المنشآت لتقديم خدمات أفضل للأعضاء.",
    },
    {
      image: News2,
      date: "21 أبريل 2022",
      time: "11:38 م",
      title:
        "زيارة وزير الشباب والرياضة لنادي الحوار الرياضي بمدينة المنصورة، حيث أشاد بالمستوى المتميز للخدمات والمنشآت.",
    },
    {
      image: News3,
      date: "مايو 2022",
      time: "12:00 م",
      title:
        "نادي الحوار يستضيف نقطة ختام ماراثون 'قادرين' وينظم يومًا رياضيًا حافلًا بالأنشطة الترفيهية والرياضية.",
    },
  
    {
      image: News4,
      date: "يونيو 2023",
      time: "9:00 ص",
      title:
        "بطلات نادي الحوار لكرة اليد ناشئات مواليد 2012 يحققن فوزهن الثاني على نادي النصر في بطولة الجمهورية لكرة اليد.",
    },
    {
      image: News5,
      date: "أغسطس 2023",
      time: "3:00 م",
      title:
        "أبطال نادي الحوار لكرة اليد مواليد 2010 ينتصرون بفارق كبير على نادي جزيرة الورد ضمن فعاليات بطولة منطقة الدقهلية.",
    },
    {
      image: News6,
      date: "ديسمبر 2022",
      time: "5:00 م",
      title:
        "فريق كرة القدم مواليد 2011 بنادي الحوار يتصدر مجموعته بدون هزيمة بعد الفوز على نبروه في دوري منطقة الدقهلية.",
    },
  ];
  return (
    <div
      className="building-outer py-12  bg-hawar-blue-dark"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="head border-b mb-8 flex items-center justify-between">
          <h3 className="text-3xl text-hawar-orange font-semibold">أهم الأحداث</h3>
          <div className="flex items-center  mb-4  space-x-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="bg-hawar-orange text-white p-2 m-2 rounded-full hover:bg-hawar-blue-dark hover:text-hawar-orange transition"
              aria-label="Previous Slide"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="bg-hawar-orange text-white p-2 rounded-full hover:bg-hawar-blue-dark hover:text-hawar-orange transition"
              aria-label="Next Slide"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
          {featureClasses.map((feature, index) => (
            <SwiperSlide key={index}>
             <div className="px-4">
  <div
    className="relative feature-box bg-hawar-blue-darker p-6 rounded-lg shadow-md overflow-hidden h-[420px] flex flex-col justify-between"
    data-aos="fade-up"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-hawar-orange via-transparent to-hawar-orange-dark opacity-20 animate-slow-pulse rounded-lg blur-xl"></div>
    <div className="relative z-10 flex-grow">
      <figure className="relative">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-[180px] object-cover rounded-md"
        />
        <div className="time-box absolute bottom-4 left-4 z-20 flex space-x-2">
          <span className="date bg-orange-500 text-white text-xs px-2 py-1 transform -skew-x-12 rounded-md shadow">
            {feature.date}
          </span>
          <span className="time bg-blue-500 text-white text-xs px-2 py-1 transform skew-x-12 rounded-md shadow">
            {feature.time}
          </span>
        </div>
      </figure>
      <h4 className="text-xl font-semibold mt-4 text-center text-white">
        {feature.title.length > 70
          ? showFullText.includes(index)
            ? feature.title
            : `${feature.title.substring(0, 70)}...`
          : feature.title}
      </h4>
    </div>
    {feature.title.length > 70 && (
      <button
        onClick={() => toggleShowMore(index)}
        className="text-orange-500 mt-2 text-sm hover:underline"
      >
        {showFullText.includes(index) ? "عرض أقل" : "عرض المزيد"}
      </button>
    )}
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
