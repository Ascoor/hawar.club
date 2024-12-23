import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube, 
} from "react-icons/fa";
import aboutImage from '../assets/hawar-about-1.jpg'; 

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        font-arabic
        bg-gradient-to-l 
        from-hawar-blue-darker 
        to-hawar-blue 
        bg-cover 
        bg-center 
        bg-no-repeat 
        bg-blend-overlay 
        pt-12 
        pb-16 
        px-4 
        md:px-8 
        lg:px-16 
        text-white
        relative
        overflow-hidden
      "
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* طبقة التغطية لتعزيز وضوح النص */}
      <div className="absolute inset-0 bg-hawar-blue-darker  bg-opacity-90"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16 relative z-10">
        {/* صورة مع تأثير التوهج البرتقالي المتحرك */}
        <div className="flex-1 relative z-10 bg-black rounded-card" 
                  data-aos="fade-down">
          {/* طبقة التوهج البرتقالي المتحرك حول الصورة */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-80 h-40 bg-hawar-orange  opacity-80 rounded-card orange-glow"></div>
            </div>
          </div>

          <div className="shadow-led-orange rounded-card overflow-hidden  relative"  >
            <img 
              src={aboutImage} 
              alt="صورة لنادي الحوار" 
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-95 "
            />
          </div>
        </div>

        {/* النص التعريفي */}
        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-hawar-orange inline-block pb-2">
        عن النادى
          </h2>
          <p className="leading-8 text-base md:text-lg">
            يُعد نادي الحوار للألعاب الرياضية واحدًا من أبرز الأندية الرياضية 
            في مدينة <span className="text-hawar-orange font-semibold">المنصورة</span> 
            بمحافظة الدقهلية في مصر. يتميز النادي بمرافقه الرياضية المتنوعة 
            وخدماته المميزة لأعضائه ومحبيه، إذ يوفّر بيئة مثالية للتمرين والتدريب 
            والاستمتاع بأجواء صحية واجتماعية. 
          </p>
          <p className="leading-8 text-base md:text-lg">
            يمتلك النادي أنشطة رياضية عديدة تناسب مختلف الأعمار والاهتمامات 
            مثل كرة القدم، وكرة السلة، والسباحة، والتنس، فضلًا عن وجود فرق رياضية 
            تنافس في بطولات محلية وإقليمية. وبالإضافة إلى ذلك، يهتم النادي بتطوير 
            الجانب الثقافي والاجتماعي عبر فعاليات ودورات تدريبية وأنشطة ترفيهية 
            على مدار العام.
          </p>
          <p className="leading-8 text-base md:text-lg">
            لمزيد من المعلومات وآخر الأخبار والفعّاليات، يمكنكم زيارة صفحاتنا 
            على مواقع التواصل الاجتماعي:
          </p>
        <div className="mt-2 flex justify-center md:justify-start gap-4">
              <a
                className="hover:scale-110 text-white hover:text-icon-color-fb transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/HSC.Mansoura/"
            
             data-aos="fade-left"
        >
                <FaFacebook size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-icon-color-link transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
               data-aos="fade-left"
          >
                <FaLinkedinIn size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-icon-color-insta  transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/hsc.mansoura/"
               data-aos="fade-up"
          >
                <FaInstagram size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-icon-color-twitter  transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
                      data-aos="fade-right"
          >
                <FaTwitter size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-icon-color-tube transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/"
               data-aos="fade-right"
          >
                <FaYoutube size={36} />
              </a>
            </div>
   
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
