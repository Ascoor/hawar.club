import Gym7 from '../assets/gym/gym-7.png';
import CounterBg from '../assets/images/building_bg _blue.png';

const MuscleSection = () => {
  return (
    <section
      className="
        bg-hawar-blue-dark
        bg-cover 
        bg-center 
        bg-no-repeat
        bg-blend-overlay
        bg-opacity-50
      "
      style={{ backgroundImage: `url(${CounterBg})` }}
      id="muscle"
    >
      {/* الخط العلوي البرتقالي */}
      <div className="border-t-8 mb-8 border-hawar-orange" />

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-4 py-8 lg:py-12">
        {/* النص */}
        <div className="flex-1 space-y-6 text-center lg:text-right">
          <h3 className="text-3xl lg:text-5xl text-hawar-orange font-bold leading-snug">
            تغيير حياتك يبدأ هنا
          </h3>
          <p className="text-base lg:text-2xl text-white leading-relaxed">
            انضم إلى فريقنا المتخصص وابدأ رحلتك نحو صحة أفضل وحياة أكثر نشاطًا
            باستخدام أحدث معدات 
            <span className="text-hawar-orange"> Tecnogym </span>
            العالمية.
          </p>
          <a
            href="/contact-us"
            className="
              inline-block 
              bg-hawar-orange 
              font-bold 
              text-white 
              text-base lg:text-lg 
              py-3 px-8 
              rounded-full 
              shadow-lg 
              hover:bg-hawar-blue-dark 
              hover:text-hawar-orange 
              hover:border-hawar-orange 
              border-2 border-transparent
              transition-all 
              duration-300 
              transform 
              hover:-translate-y-1
            "
          >
            اشترك الآن
          </a>
        </div>

        {/* الصورة */}
        <figure
           data-aos="fade-down"
          className="
            flex-1
            w-full 
            h-[50vh] 
            lg:h-auto 
            overflow-hidden 
            rounded-card 
            shadow-led-orange 
            relative 
            group 
            mb-6 
            lg:mb-0
          "
        >
          <img
            src={Gym7}
            alt="Muscle Building"
            className="
              w-full 
              h-full 
              object-cover 
              rounded-card
              transition-transform 
              duration-500 
              group-hover:scale-110
            "
          />
          {/* طبقة شفافة متدرجة على الصورة */}
          <div
            className="
              absolute 
              inset-0 
              bg-gradient-to-b 
              from-transparent 
              to-black 
              opacity-30 
              group-hover:opacity-50 
              transition-opacity 
              duration-500 
              rounded-card
            "
          />
        </figure>
      </div>

      {/* الخط السفلي البرتقالي */}
      <div className="border-b-8 mt-8 border-hawar-orange" />
    </section>
  );
};

export default MuscleSection;
