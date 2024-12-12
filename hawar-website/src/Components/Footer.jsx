import { useState, useEffect } from 'react';

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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
    <footer
      className="footer bg-top  text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
      }}
    >
      <div className="footer-top py-16">
        <div className="container   mt-32  xs:mt-64 mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="contact-us">
              <h3 className="text-xl font-bold mb-4 text-hawar-orange">حول</h3>
              <p className="text-sm mb-4">
                نادى الحوار للألعاب الرياضية يسعى دائماً إلى تقديم أفضل
                الخدمات الرياضية لعملائنا، معتمدين على أحدث المعدات وأفضل
                المدربين.
              </p>
              <p className="text-sm mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-lg" />
                23 شارع التصميم الجديد، ملبورن
              </p>
              <p className="text-sm mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-lg" />
                <a
                  href="mailto:fitnessgym@gmail.com"
                  className="hover:text-hawar-orange transition-colors duration-300"
                >
                  fitnessgym@gmail.com
                </a>
              </p>
              <p className="text-sm flex items-center">
                <FaPhone className="mr-2 text-lg" />
                +880-123-456-7890
              </p>
            </div>

            <div className="newletter">
              <h3 className="text-xl font-bold mb-4 text-hawar-orange">
                النشرة الإخبارية
              </h3>
              <p className="text-sm mb-4">
                اشترك في قائمتنا البريدية للحصول على أحدث التحديثات والعروض.
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="bg-transparent border-2 border-gray-300 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="ml-4 bg-hawar-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors duration-300">
                  <span className="sr-only">اشتراك</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              <ul className="follow-us flex space-x-4">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex items-center justify-center ml-4 w-10 h-10 bg-gray-700 rounded-full shadow-md hover:bg-hawar-orange transition-all duration-300"
                  >
                    <FaFacebook className="text-white hover:text-gray-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full shadow-md hover:bg-hawar-orange transition-all duration-300"
                  >
                    <FaTwitter className="text-white hover:text-gray-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full shadow-md hover:bg-hawar-orange transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-white hover:text-gray-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full shadow-md hover:bg-hawar-orange transition-all duration-300"
                  >
                    <FaInstagram className="text-white hover:text-gray-100" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full shadow-md hover:bg-hawar-blue-dark transition-all duration-300"
                  >
                    <FaYoutube className="text-white hover:text-gray-100" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flickr-photos">
              <h3 className="text-xl font-bold mb-4 text-hawar-orange">
                أبطالنا
              </h3>
              <ul className="flicker-box clearfix">
                {flickrPhotos.map((photo, index) => (
                  <li
                    key={index}
                    className="relative overflow-hidden rounded-md"
                  >
                    <a
                      href={photo.imgB}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={photo.img}
                        alt={photo.alt}
                        className="w-full h-24 sm:h-32 object-cover transform transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
              <div className="copy-rights-section text-center ">
          <div className="container mx-auto text-center font-bold ">
            <p className="text-white text-sm">
              <a
                href="https://www.templateshub.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hawar-orange transition-colors duration-300"
              >
                جميع الحقوق محفوظة نادي الحوار للألعاب الرياضية 2024
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 xs:mb-12 right-8 bg-hawar-orange text-white rounded-full p-4 shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange transition-all duration-300 ${
            visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } animate-pulse`}
          aria-label="الرجوع للأعلى"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
