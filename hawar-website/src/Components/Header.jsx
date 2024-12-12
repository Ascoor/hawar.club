// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import Logo1 from '../assets/logo-1.png';
import LogoFix from '../assets/logo-2.png';
import { PaperAirplaneIcon, MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // تحديد حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // يعتبر كل ما يقل عن lg (1024px) كموبايل أو تاب
    };

    handleResize(); // التحقق عند التحميل الأول
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // التعامل مع التمرير
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50 && isMobile) {
        // التمرير لأسفل
        setShowHeader(false);
      } else {
        // التمرير لأعلى
        setShowHeader(true);
      }

      // تغيير لون الخلفية بناءً على التمرير
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
    } ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'} `}
  >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الشعار */}
        <a href="/" className="flex items-center">
          <img
            className={`w-16 transition-all ${scrolled ? 'hidden' : 'block'}`}
            src={Logo1}
            alt="شعار النادي الرياضي"
          />
          <img
            className={`w-16 transition-all ${scrolled ? 'block' : 'hidden'}`}
            src={LogoFix}
            alt="شعار النادي الرياضي"
          />
        </a>

        {/* قائمة التنقل للكمبيوتر */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <a
                href="/"
                className={`${
                  scrolled ? 'text-hawar-blue-dark hover:border-b-2  hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold  ml-4 tracking-wide`}
              >
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about-us"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                عن النادي
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/classes"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                الدروس
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/schedule"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                الجدول الزمني
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/trainers"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                المدربون
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/news"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                الأخبار
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact-us"
                className={`${
                  scrolled ? 'text-blue-800 hover:border-b-2 hover:border-orange-500' : 'text-white hover:text-orange-500'
                } text-xl font-semibold tracking-wide`}
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>

        {/* زر القائمة الجوالة */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`text-${scrolled ? 'blue-800' : 'white'} text-2xl focus:outline-none`}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* القوائم الجوالة */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-hawar-blue-darker text-white p-4 lg:hidden">
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

          {/* خانة البحث تحت العناوين */}
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
