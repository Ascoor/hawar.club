import { useState, useEffect } from 'react';
import Logo1 from '../assets/logo-1.png';
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-scroll"; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50 && isMobile) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  // ملاحظة: إزالة مؤشر الفأرة pointer --> استخدام cursor-default
  // بالإضافة إلى إمكانية وضع كلاس active-link لتعريفه في CSS
  const navLinkClass = (extra = '') =>
    `${
      scrolled
        ? 'text-hawar-orange hover:border-b-2 hover:text-blue-300 hover:border-orange-500'
        : 'text-white hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
    } text-xl font-semibold tracking-wide pb-1 transition-all duration-300 cursor-default ${extra}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-hawar-blue-dark border-b-2 border-hawar-orange hover:border-b-hawar-orange transition-all duration-300' : 'bg-transparent'} `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            className="w-16 transition-all"
            src={Logo1}
            alt="شعار النادي الرياضي"
          />
        </a>

        {/* قائمة الروابط في وضع الديسكتوب */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <Link
                to="banner"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link" 
                className={navLinkClass('ml-4')}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                عن النادي
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="building"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                النشاط الرياضي
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="events"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                آخر الأخبار
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="trainers"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                المدربون
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="counter"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                العضوية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                smooth="easeInOutQuint"
                duration={1500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className={navLinkClass()}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        {/* أيقونة القائمة في وضع الموبايل */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-${scrolled ? "hawar-orange" : "white"} text-2xl focus:outline-none`}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة في وضع الموبايل */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden absolute top-16 left-0 w-full bg-hawar-blue-dark border-b-hawar-orange border-b-2 text-center font-bold text-white p-4 lg:hidden"
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="banner"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  عن النادي
                </Link>
              </li>
              <li>
                <Link
                  to="building"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  النشاط الرياضي
                </Link>
              </li>
              <li>
                <Link
                  to="events"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  آخر الأخبار
                </Link>
              </li>
              <li>
                <Link
                  to="trainers"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  المدربون
                </Link>
              </li>
              <li>
                <Link
                  to="counter"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  العضوية
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-orange-500 cursor-default"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <input
                type="text"
                placeholder="البحث"
                className="px-4 py-2 border border-gray-300 rounded-md w-half text-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
