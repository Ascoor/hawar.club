import { Link } from 'react-scroll';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import HawarLogo from '../assets/hawar_logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-hawar-blue-darker via-hawar-blue-darker to-hawar-blue-dark py-10 text-white overflow-hidden">
      {/* Background Waves */}
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Club Logo & Description */}
          <div className="text-center md:text-right">
            <img
              src={HawarLogo}
              alt="Hawar Club Logo"
              className="w-32 h-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-base md:text-lg text-white/90 leading-loose">
              نادي الحوار للألعاب الرياضية هو أحد الأندية الرائدة بمدينة
              المنصورة، حيث نقدم أنشطة رياضية واجتماعية وثقافية لجميع الأعمار.
            </p>
                 <div className="flex gap-4 mt-6" data-aos="fade-left">
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

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-xl text-hawar-orange-dark font-bold mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="banner"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  عن النادي
                </Link>
              </li>
              <li>
                <Link
                  to="building"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  النشاط الرياضي
                </Link>
              </li>
              <li>
                <Link
                  to="events"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  آخر الأخبار
                </Link>
              </li>
              <li>
                <Link
                  to="trainers"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  المدربون
                </Link>
              </li>
              <li>
                <Link
                  to="counter"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="text-lg hover:text-hawar-orange transition cursor-pointer"
                >
                  العضوية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-hawar-orange-dark mb-4">
              معلومات التواصل
            </h4>
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <FaPhone size={24} className="text-hawar-orange" />
                <div>
                  <a
                    href="tel:+201234567890"
                    className="block text-lg font-medium"
                  >
                    +20 123-456-7890
                  </a>
                  <span className="text-sm text-white/70">رقم الهاتف</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <FaEnvelope size={24} className="text-hawar-orange" />
                <div>
                  <a
                    href="mailto:info@hawarclub.com"
                    className="block text-lg font-medium"
                  >
                    info@hawarclub.com
                  </a>
                  <span className="text-sm text-white/70">
                    البريد الإلكتروني
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <FaMapMarkerAlt size={24} className="text-hawar-orange" />
                <div>
                  <p className="text-lg font-medium">المنصورة، مصر</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-8 border-white/20" />
        <div className="text-center text-sm md:text-base text-hawar-orange">
          جميع الحقوق محفوظة © 2024، نادي الحوار للألعاب الرياضية.
        </div>
      </div>
    </footer>
  );
};

export default Footer;