import { useState, useEffect } from 'react';
import Logo1 from '../assets/logo-1.png';
import LogoFix from '../assets/logo-2.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-hawar-blue-dark border-b-2 border-hawar-orange hover:border-b-hawar-orange transition-all duration-300' : 'bg-transparent'} `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            className={`w-16 transition-all `}
            src={Logo1}
            alt="شعار النادي الرياضي"
          />
        </a>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <a
                href="/"
                className={`${
                  scrolled
                    ? 'text-hawar-orange ml-4 hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white  ml-4 hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about-us"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                عن النادي
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/classes"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                الدروس
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/schedule"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                الجدول الزمني
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/trainers"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                المدربون
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/news"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                الأخبار
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact-us"
                className={`${
                  scrolled
                    ? 'text-hawar-orange  hover:border-b-2  hover:text-blue-300 hover:border-orange-500'
                    : 'text-white   hover:text-blue-300 hover:border-b-2 hover:border-orange-500'
                } text-xl font-semibold tracking-wide pb-1 transition-all duration-300`}
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-${scrolled ? 'hawar-orange' : 'white'} text-2xl focus:outline-none`}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-21 left-0 w-full bg-hawar-blue text-center font-bold text-white p-4 lg:hidden">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block hover:text-orange-500">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="/about-us" className="block hover:text-orange-500">
                عن النادي
              </a>
            </li>
            <li>
              <a href="/classes" className="block hover:text-orange-500">
                الدروس
              </a>
            </li>
            <li>
              <a href="/schedule" className="block hover:text-orange-500">
                الجدول الزمني
              </a>
            </li>
            <li>
              <a href="/trainers" className="block hover:text-orange-500">
                المدربون
              </a>
            </li>
            <li>
              <a href="/news" className="block hover:text-orange-500">
                الأخبار
              </a>
            </li>
            <li>
              <a href="/contact-us" className="block hover:text-orange-500">
                تواصل معنا
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <input
              type="text"
              placeholder="البحث"
              className="px-4 py-2 border border-gray-300 rounded-md w-full text-lg"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
