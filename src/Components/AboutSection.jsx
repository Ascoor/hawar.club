import React, { useEffect } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import aboutImage from '../assets/hawar-about-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="relative bg-gradient-to-l from-hawar-blue-darker to-hawar-blue bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="absolute inset-0 bg-hawar-blue-darker bg-opacity-80"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold border-b-4 border-hawar-orange pb-6"
            data-aos="fade-right"
          >
            عن نادي الحوار
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            تأسس نادي الحوار للألعاب الرياضية بمدينة{' '}
            <span className="text-hawar-orange font-semibold">المنصورة</span>{' '}
            بمحافظة الدقهلية ليكون وجهة رياضية واجتماعية رائدة. منذ إنشائه،
            يهدف النادي إلى تقديم تجربة متميزة تجمع بين الرياضة والترفيه
            والثقافة.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            على مر السنوات، حقق النادي تطورات ملحوظة في البنية التحتية،
            تضمنت توسعات رياضية واجتماعية، مما جعله نقطة جذب للرياضيين
            والهواة. يتميز النادي بمرافقه الحديثة مثل حمامات السباحة
            الأولمبية، ملاعب التنس، وصالات اللياقة البدنية المجهزة بأحدث
            الأجهزة.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            يشمل النادي مجموعة متنوعة من الأنشطة الرياضية والاجتماعية التي
            تلبي احتياجات جميع الأعمار، مثل كرة القدم، كرة السلة، الجمباز،
            السباحة، والعديد من الرياضات الأخرى.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            لمزيد من المعلومات حول فعاليات وأنشطة النادي، ندعوكم للانضمام
            ومتابعتنا على مواقع التواصل الاجتماعي:
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4" data-aos="fade-left">
            <a
              href="https://www.facebook.com/HSC.Mansoura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-icon-color-fb transition duration-300"
            >
              <FaFacebook size={36} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-icon-color-link transition duration-300"
            >
              <FaLinkedinIn size={36} />
            </a>
            <a
              href="https://www.instagram.com/hsc.mansoura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-icon-color-insta transition duration-300"
            >
              <FaInstagram size={36} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-icon-color-twitter transition duration-300"
            >
              <FaTwitter size={36} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-icon-color-tube transition duration-300"
            >
              <FaYoutube size={36} />
            </a>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex-1 relative" data-aos="fade-up">
          <div className="shadow-led-orange rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt="نادي الحوار"
              className="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
