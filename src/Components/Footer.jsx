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

const socialLinks = [
  {
    href: 'https://www.facebook.com/HSC.Mansoura/',
    icon: FaFacebook,
    label: 'Facebook',
  },
  { href: 'https://www.linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
  {
    href: 'https://www.instagram.com/hsc.mansoura/',
    icon: FaInstagram,
    label: 'Instagram',
  },
  { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.youtube.com/', icon: FaYoutube, label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-hawar-blue-darker via-hawar-blue-darker to-hawar-blue-dark py-10 text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {}
          <div className="text-center md:text-right">
            <img
              src={HawarLogo}
              alt="شعار نادي الحوار"
              className="w-32 h-auto mb-4 mx-auto md:mx-0"
              loading="lazy"
            />
            <p className="text-base md:text-lg text-white/90 leading-loose">
              نادي الحوار للألعاب الرياضية هو أحد الأندية الرائدة بمدينة
              المنصورة، حيث نقدم أنشطة رياضية واجتماعية وثقافية لجميع الأعمار.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`رابط ${label}`}
                  className="text-white hover:text-hawar-orange transition duration-300"
                >
                  <Icon size={36} />
                </a>
              ))}
            </div>
          </div>

          {}
          <div className="text-center md:text-right">
            <h4 className="text-xl text-hawar-orange font-bold mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'banner', label: 'الرئيسية' },
                { id: 'about', label: 'عن النادي' },
                { id: 'building', label: 'النشاط الرياضي' },
                { id: 'events', label: 'آخر الأخبار' },
                { id: 'trainers', label: 'المدربون' },
                { id: 'counter', label: 'العضوية' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth
                    duration={800}
                    offset={-70}
                    className="text-lg hover:text-hawar-orange transition cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-hawar-orange mb-4">
              معلومات التواصل
            </h4>
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <FaPhone size={24} className="text-hawar-orange" />
                <div>
                  <a
                    href="tel:+201234567890"
                    className="block text-lg font-medium"
                    aria-label="رقم الهاتف"
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
                    aria-label="البريد الإلكتروني"
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

        {}
        <hr className="my-8 border-white/20" />
        <div className="text-center text-sm md:text-base text-hawar-orange">
          جميع الحقوق محفوظة © 2024، نادي الحوار للألعاب الرياضية.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
