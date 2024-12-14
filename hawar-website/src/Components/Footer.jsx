import { useState, useEffect } from 'react';
import HawarLogo from '../assets/hawar_logo.png';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from 'react-icons/fa';
import footerBg from '../assets/heros/slide.png';
import Flickr1 from '../assets/images/flic1.png';
import Flickr1B from '../assets/images/flic1B.png';
import Flickr2 from '../assets/images/flic2.png';
import Flickr2B from '../assets/images/flic2B.png';
import Flickr3 from '../assets/images/flic3.png';
import Flickr3B from '../assets/images/flic3B.png';
import Flickr4 from '../assets/images/flic4.png';
import Flickr4B from '../assets/images/flic4B.png';
import Flickr5 from '../assets/images/flic5.png';
import Flickr5B from '../assets/images/flic5B.png';
import Flickr6 from '../assets/images/flic6.png';
import Flickr6B from '../assets/images/flic6B.png';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const flickrPhotos = [
    { img: Flickr1, imgB: Flickr1B, alt: 'صورة 1' },
    { img: Flickr2, imgB: Flickr2B, alt: 'صورة 2' },
    { img: Flickr3, imgB: Flickr3B, alt: 'صورة 3' },
    { img: Flickr4, imgB: Flickr4B, alt: 'صورة 4' },
    { img: Flickr5, imgB: Flickr5B, alt: 'صورة 5' },
    { img: Flickr6, imgB: Flickr6B, alt: 'صورة 6' },
  ];

  return (
    <div className="bg-hawar-blue-dark pt-9 text-right">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo and Description Section */}
          <div className="md:w-[316px]">
            <div className="mb-4">
               
              <img src={HawarLogo} className='w-56 h-auto' />
            </div>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              نادي الحوار للألعاب الرياضية هو أحد الأندية الرائدة بمدينة المنصورة، حيث نقدم أنشطة رياضية واجتماعية وثقافية لجميع الأعمار.
            </p>

            <div className="mt-[18px] flex gap-4">
              <a
                className="hover:scale-110 text-white hover:text-hawar-orange transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/HSC.Mansoura/"
              >
                <FaFacebook size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-hawar-blue-light transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                <FaLinkedinIn size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-pink-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/hsc.mansoura/"
              >
                <FaInstagram size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-blue-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <FaTwitter size={36} />
              </a>
              <a
                className="hover:scale-110 text-white hover:text-red-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/"
              >
                <FaYoutube size={36} />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="md:w-[316px]">
            <div className="mt-[23px] flex items-center gap-4">
              <FaPhone size={24} className="text-hawar-orange" />
              <div className="ml-[18px]">
                <a
                  href="tel:+201234567890"
                  className="font-Inter text-[14px] font-medium text-white"
                >
                  +20 123-456-7890
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">
                  رقم الهاتف
                </p>
              </div>
            </div>
            <div className="mt-[23px] flex items-center gap-4">
              <FaEnvelope size={24} className="text-hawar-orange" />
              <div className="ml-[18px]">
                <a
                  href="mailto:info@hawarclub.com"
                  className="font-Inter text-[14px] font-medium text-white"
                >
                  info@hawarclub.com
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">
                  البريد الإلكتروني
                </p>
              </div>
            </div>
            <div className="mt-[23px] flex items-center gap-4">
              <FaMapMarkerAlt size={24} className="text-hawar-orange" />
              <div className="ml-[18px]">
                <p className="font-Inter text-[14px] font-medium text-white">
                  المنصورة، مصر
                </p>
                <p className="font-Inter text-[12px] font-medium text-white">
                  الموقع الجغرافي
                </p>
              </div>
            </div>
          </div>

          {/* Pages Section */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                روابط سريعة
              </p>
              <ul>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    الرئيسية
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/about"
                  >
                    عن النادي
                  </a>
                </li>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/contact"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 xs:mb-12 left-8 bg-hawar-orange text-white rounded-full p-4 shadow-lg hover:bg-hawar-blue-light hover:text-hawar-orange transition-all duration-300 ${
            visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } animate-pulse`}
          aria-label="الرجوع للأعلى"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
   
        </div>
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            جميع الحقوق محفوظة © 2024، نادي الحوار للألعاب الرياضية.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;