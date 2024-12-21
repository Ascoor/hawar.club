import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import HawarLogo from '../assets/hawar_logo.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-hawar-blue-darker via-hawar-blue-dark to-hawar-blue-darker py-10 text-white">
  <div className="container mx-auto px-4 lg:px-8">
    {/* الشبكة الرئيسية */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {/* القسم الأول: الشعار والوصف */}
      <div className="text-center md:text-right">
        <img src={HawarLogo} alt="Hawar Club Logo" className="w-32 h-auto mb-4 mx-auto md:mx-0" />
        <p className="text-base md:text-lg text-white/90 leading-loose">
          نادي الحوار للألعاب الرياضية هو أحد الأندية الرائدة بمدينة المنصورة، حيث نقدم أنشطة رياضية واجتماعية وثقافية لجميع الأعمار.
        </p>
      
      </div>

      {/* القسم الثاني: الروابط السريعة */}
      <div className="text-center md:text-right">
        <h4 className="text-xl text-hawar-orange-dark font-bold mb-4">روابط سريعة</h4>
        <ul className="space-y-3">
          <li>
            <a href="/" className="text-lg hover:text-hawar-orange transition">الرئيسية</a>
          </li>
          <li>
            <a href="/about" className="text-lg hover:text-hawar-orange transition">عن النادي</a>
          </li>
          
          <li>
            <a href="/contact" className="text-lg hover:text-hawar-orange transition">النشاط الرياضى</a>
          </li>
          <li>
            <a href="/contact" className="text-lg hover:text-hawar-orange transition">أخر الأخبار</a>
          </li>
          <li>
            <a href="/contact" className="text-lg hover:text-hawar-orange transition">المدربين</a>
          </li>
          <li>
            <a href="/contact" className="text-lg hover:text-hawar-orange transition">العضوية</a>
          </li>
        </ul>
        <div className="mt-2 flex justify-center md:justify-start gap-4">
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

      {/* القسم الثالث: معلومات التواصل والخريطة */}
      <div className="text-center md:text-right">
        <h4 className="text-xl font-bold  text-hawar-orange-dark mb-4">معلومات التواصل</h4>
        
        <div className="space-y-6">
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <FaPhone size={24} className="text-hawar-orange" />
            <div>
              <a href="tel:+201234567890" className="block text-lg font-medium">
                +20 123-456-7890
              </a>
              <span className="text-sm text-white/70">رقم الهاتف</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <FaEnvelope size={24} className="text-hawar-orange" />
            <div>
              <a href="mailto:info@hawarclub.com" className="block text-lg font-medium">
                info@hawarclub.com
              </a>
              <span className="text-sm text-white/70">البريد الإلكتروني</span>
            </div>
            
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <FaMapMarkerAlt size={24} className="text-hawar-orange" />
            <div>
              <p className="text-lg font-medium">المنصورة، مصر</p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27347.769671999817!2d31.382916456638554!3d31.040979221097462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dda08b6825b%3A0x35e19c8a157da2c6!2z2YbYp9iv2Yog2KfZhNit2YjYp9ixINmE2YTYo9mE2LnYp9ioINin2YTYsdmK2KfYttmK2KkgLSBIYXdhciBTcG9ydHMgQ2x1Yg!5e0!3m2!1sar!2snl!4v1734766248219!5m2!1sar!2snl"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>

    {/* الخط الفاصل */}
    <hr className="my-8 border-white/20" />

    {/* النص السفلي */}
    <div className="text-center text-sm md:text-base text-white/80">
      جميع الحقوق محفوظة © 2024، نادي الحوار للألعاب الرياضية.
    </div>
  </div>
</footer>

  );
};

export default Footer;
