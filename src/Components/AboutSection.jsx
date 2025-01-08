import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    <section
      id="about"
      className="relative bg-gradient-to-l from-hawar-blue-darker to-hawar-blue bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hawar-blue-darker bg-opacity-80"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Content */}
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
            تأسس{' '}
            <span className="text-hawar-orange font-bold">نادي الحوار</span>{' '}
            للألعاب الرياضية بمدينة المنصورة ليكون وجهة رياضية واجتماعية متميزة.
            النادي يهدف إلى تقديم خدمات رياضية، اجتماعية، وثقافية عالية الجودة
            تناسب جميع الأعمار.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            يضم النادي مرافق رياضية حديثة تشمل حمامات سباحة أولمبية، ملاعب تنس،
            صالات لياقة مجهزة بأحدث الأجهزة، ومساحات اجتماعية وثقافية لاستضافة
            الفعاليات والأنشطة.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            في عام 2021، تم تدشين المرحلة الثانية من تطوير النادي بتكلفة تجاوزت
            300 مليون جنيه، لتقديم خدمات رياضية واجتماعية واستثمارية متميزة.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            يُعتبر النادي نموذجًا ناجحًا للاستثمار الرياضي، حيث يساهم بشكل كبير
            في نشر الرياضة وتعزيز المشاركة المجتمعية.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-up"
          >
            تابعنا على وسائل التواصل الاجتماعي لمعرفة المزيد عن أنشطتنا
            وفعالياتنا القادمة:
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4" data-aos="fade-left">
            {[
              {
                href: 'https://www.facebook.com/HSC.Mansoura/',
                Icon: FaFacebook,
                alt: 'Facebook',
              },
              {
                href: 'https://www.linkedin.com',
                Icon: FaLinkedinIn,
                alt: 'LinkedIn',
              },
              {
                href: 'https://www.instagram.com/hsc.mansoura/',
                Icon: FaInstagram,
                alt: 'Instagram',
              },
              {
                href: 'https://twitter.com',
                Icon: FaTwitter,
                alt: 'Twitter',
              },
              {
                href: 'https://www.youtube.com/',
                Icon: FaYoutube,
                alt: 'YouTube',
              },
            ].map(({ href, Icon, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label={alt}
              >
                <Icon size={36} />
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative" data-aos="fade-up">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <LazyLoadImage
              src={aboutImage}
              alt="مرافق نادي الحوار"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              effect="opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
