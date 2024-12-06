import React, { useState, useEffect } from 'react';
import Logo1 from '../assets/logo-1.png';
import LogoFix from '../assets/logo-2.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Detect scroll and change the header style
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all ${
        scrolled ? 'bg-white text-dark' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="index-2.html" className="flex items-center">
            <img
              className={`w-24 transition-all ${scrolled ? 'hidden' : 'block'}`}
              src={Logo1}
              alt="Fitness Gym"
            />
            <img
              className={`w-24 transition-all ${scrolled ? 'block' : 'hidden'}`}
              src={LogoFix}
              alt="Fitness Gym"
            />
          </a>

          {/* Header Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Navbar for Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li className="nav-item">
                <a
                  href="index-2.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="about-us.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="classes.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  Classes
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="schedule.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="trainers.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  Trainers
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="news.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="contact-us.html"
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:border-b-2 hover:border-orange-500`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navbar Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-blue-800 text-white p-4 md:hidden">
          <ul className="space-y-4">
            <li>
              <a href="index-2.html" className="block hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="about-us.html" className="block hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="classes.html" className="block hover:text-orange-500">
                Classes
              </a>
            </li>
            <li>
              <a href="schedule.html" className="block hover:text-orange-500">
                Schedule
              </a>
            </li>
            <li>
              <a href="trainers.html" className="block hover:text-orange-500">
                Trainers
              </a>
            </li>
            <li>
              <a href="news.html" className="block hover:text-orange-500">
                News
              </a>
            </li>
            <li>
              <a href="contact-us.html" className="block hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
