import { useState, useEffect, useReducer } from 'react';
import Logo1 from '../assets/logo-1.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const initialState = {
  scrolled: false,
  menuOpen: false,
  showHeader: true,
  lastScrollY: 0,
  isMobile: window.innerWidth < 1024,
};

function headerReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, menuOpen: !state.menuOpen };
    case 'SET_SCROLLED':
      return { ...state, scrolled: action.payload };
    case 'SET_SHOW_HEADER':
      return { ...state, showHeader: action.payload };
    case 'SET_LAST_SCROLL_Y':
      return { ...state, lastScrollY: action.payload };
    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
}

const Header = () => {
  const [state, dispatch] = useReducer(headerReducer, initialState);

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: 'SET_IS_MOBILE', payload: window.innerWidth < 1024 });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > state.lastScrollY;

      dispatch({
        type: 'SET_SHOW_HEADER',
        payload: !(isScrollingDown && currentScrollY > 50 && state.isMobile),
      });
      dispatch({ type: 'SET_SCROLLED', payload: currentScrollY > 50 });
      dispatch({ type: 'SET_LAST_SCROLL_Y', payload: currentScrollY });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [state.lastScrollY, state.isMobile]);

  const navLinkClass = (extra = '') =>
    `${
      state.scrolled
        ? 'text-hawar-orange hover:border-b-2 hover:text-blue-100 hover:border-orange-500'
        : 'text-white hover:text-blue-200 hover:border-b-2 hover:border-orange-500'
    } text-xl font-semibold tracking-wide pb-1 transition-all duration-300 ${extra}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        state.showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${state.scrolled ? 'bg-hawar-blue-dark border-b-2 border-hawar-orange' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            className="w-16 transition-all"
            src={Logo1}
            alt="شعار النادي الرياضي"
          />
        </a>

        {}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6">
            {[
              { id: 'banner', label: 'الرئيسية' },
              { id: 'about', label: 'عن النادي' },
              { id: 'building', label: 'الأنشطة الرياضية' },
              { id: 'events', label: 'أهم الأحداث' },
              { id: 'trainers', label: 'المدربون' },
              { id: 'counter', label: 'العضوية' },
              { id: 'footer', label: 'تواصل معنا' },
            ].map(({ id, label }) => (
              <li key={id} className="nav-item">
                <Link
                  to={id}
                  smooth="easeInOutQuint"
                  duration={1500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  className={navLinkClass('px-2')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {}
        <div className="lg:hidden">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            className={`text-${state.scrolled ? 'hawar-orange' : 'white'} text-2xl focus:outline-none`}
          >
            {state.menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {}
      <AnimatePresence>
        {state.menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden absolute top-16 left-0 w-full bg-hawar-blue-dark border-b-hawar-orange border-b-2 text-center font-bold text-white p-4 lg:hidden"
          >
            <ul className="space-y-4">
              {[
                { id: 'banner', label: 'الرئيسية' },
                { id: 'about', label: 'عن النادي' },
                { id: 'building', label: 'الأنشطة الرياضية' },
                { id: 'events', label: 'أهم الأحداث' },
                { id: 'trainers', label: 'المدربون' },
                { id: 'counter', label: 'العضوية' },
                { id: 'footer', label: 'تواصل معنا' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth="easeInOutQuint"
                    duration={1500}
                    offset={-70}
                    spy={true}
                    activeClass="active-link"
                    onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                    className="block hover:text-orange-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
