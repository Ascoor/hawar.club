import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo-1.png";
import { navLinks } from '../Data/Data';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Only handle resize and scroll
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className={`transition-all ${scrolled ? "bg-hawar-blue" : "bg-transparent"} fixed w-full top-0 z-30 border-b-2 border-orange-500`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <a href="/" className="flex items-center">
            <img
              src={logo1}
              alt="Logo"
              width={40}
              height={30}
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center justify-center w-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-white text-lg font-bold transition-colors duration-300 hover:text-orange-300`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <IoClose className="text-white" /> : <FiMenu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="fixed inset-0 bg-orange-400 bg-opacity-85 z-50 flex flex-col items-center gap-6 py-16">
          <button
            onClick={closeMenu}
            className="absolute top-8 left-6 text-white text-3xl font-bold p-2 bg-gray-800 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
          >
            <IoClose />
          </button>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-xl m-2 hover:text-gray-300"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
