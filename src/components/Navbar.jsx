import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/#about', name: 'About', offset: -50 },
    { path: '/#solutions', name: 'Solutions', offset: -50 },
    { path: '/#connect', name: 'Connect', offset: -50 },
    { path: '/live_data', name: 'Live Data' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['about', 'solutions', 'connect'];
        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    setActiveSection(location.pathname === '/' ? '' : location.pathname.slice(1));
  }, [location]);


  const handleNavClick = (path, offset = 0) => {
    setIsOpen(false);
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const section = path.substring(2);
      const element = document.getElementById(section);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const isLinkActive = (path) => {
    if (path === '/live_data') {
      return location.pathname === '/live_data';
    }
    return path === `/#${activeSection}`;
  };



  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? `${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md shadow-lg`
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
            onClick={() => handleNavClick('/')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 cursor-pointer ${scrolled ? '' : 'hover:text-blue-500'
                }`}
            >
              <motion.div
                animate={{ rotate: darkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
              >
                <span className="text-white font-bold">S</span>
              </motion.div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                } transition-colors duration-200`}>
                Solar Quest
              </h1>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => handleNavClick(link.path, link.offset)}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md
                      ${isLinkActive(link.path)
                        ? `${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                        : `${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500`
                      }
                      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
                      before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 
                      before:transition-transform before:duration-200
                      hover:before:scale-x-100`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
            >
              {darkMode ? '🌞' : '🌜'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${darkMode
              ? 'text-white hover:bg-gray-800'
              : 'text-gray-900 hover:bg-gray-100'
              }`}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed top-0 right-0 h-screen w-[280px] bg-white dark:bg-gray-900 shadow-2xl md:hidden overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Solar Quest
                    </span>
                  </motion.div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => handleNavClick(link.path, link.offset)}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 
                          ${isLinkActive(link.path)
                            ? `${darkMode
                              ? 'text-blue-400 bg-gray-800/50'
                              : 'text-blue-600 bg-blue-50'}`
                            : `${darkMode
                              ? 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                          }
                          relative overflow-hidden group`
                        }
                      >
                        <motion.span
                          className="relative z-10 flex items-center"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {link.name}
                        </motion.span>
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Theme Toggle in Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4 border-t dark:border-gray-700"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleTheme}
                      className={`w-full p-4 rounded-lg text-left font-medium
                        ${darkMode
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}
                          transition-all duration-200 flex items-center justify-between`
                      }
                    >
                      <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                      <span className="text-xl">{darkMode ? '🌞' : '🌜'}</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;