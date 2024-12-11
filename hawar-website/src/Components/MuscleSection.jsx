import React from "react";
import Gym7 from "../assets/gym/gym-7.png";

const MuscleSection = () => {
  return (
    <div className="muscle-outer bg-gray-100 w-full relative flex flex-wrap lg:flex-nowrap">
      {/* الصورة */}
     
      <figure className="w-full lg:w-[50%] h-[50vh] lg:h-auto overflow-hidden relative group">
        <img
          src={Gym7}
          alt="Muscle Building"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
      </figure>
      <div className="muscle-para bg-hawar-blue-dark p-12 lg:p-20 w-full lg:w-[50%] flex items-center justify-center relative">
        <div className="max-w-[700px] text-center lg:text-right space-y-6">
          <h3 className="text-3xl lg:text-5xl text-hawar-orange font-bold leading-snug">
            تغيير حياتك يبدأ هنا
          </h3>
          <p className="text-lg lg:text-2xl text-white leading-relaxed">
            انضم إلى فريقنا المتخصص وابدأ رحلتك نحو صحة أفضل وحياة أكثر نشاطًا باستخدام أحدث معدات 
            <span className="text-hawar-orange"> Tecnogym </span> العالمية.
          </p>
          <a
            href="contact-us.html"
            className="inline-block bg-orange-500 text-white text-lg py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-orange-500 hover:border-orange-500 border-transparent border-2 transition-all duration-300 transform hover:-translate-y-1"
          >
            انضم إلينا
          </a>
        </div>
      </div>
     


      {/* النصوص والأزرار */}

    </div>
  );
};

export default MuscleSection;
