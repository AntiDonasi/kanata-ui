import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes, FaHome, FaCog, FaDollarSign, FaBook, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', href: '/', icon: FaHome, action: () => scrollToTop() },
    { name: 'Features', href: '/#features', icon: FaCog, action: () => scrollToSection('features') },
    { name: 'Pricing', href: '/#pricing', icon: FaDollarSign, action: () => scrollToSection('pricing') },
    { name: 'Tutorial', href: '/tutorial', icon: FaBook, isRoute: true },
    { name: 'Contact', href: '/#contact', icon: FaPhone, action: () => scrollToSection('contact') }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-inset-top ${isScrolled 
        ? 'backdrop-blur-lg bg-white/98 shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/"
              onClick={scrollToTop}
              className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 z-10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaWhatsapp className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                  }`}>Kanata Bot</h1>
                <p className="text-xs sm:text-sm text-green-400 font-medium drop-shadow-md">WhatsApp Assistant</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${location.pathname === item.href 
                        ? isScrolled
                          ? 'text-green-700 bg-green-50 shadow-sm'
                          : 'text-green-300 bg-white/10 backdrop-blur-sm'
                        : isScrolled
                          ? 'text-gray-800 hover:bg-green-50 hover:text-green-700 hover:shadow-sm'
                          : 'text-white hover:bg-white/10 hover:text-green-300 drop-shadow-md backdrop-blur-sm'
                        }`}
                    >
                      <IconComponent className="text-lg" />
                      <span className="relative">
                        {item.name}
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-green-600' : 'bg-green-300'
                          }`}></span>
                      </span>
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isScrolled
                      ? 'text-gray-800 hover:bg-green-50 hover:text-green-700 hover:shadow-sm'
                      : 'text-white hover:bg-white/10 hover:text-green-300 drop-shadow-md backdrop-blur-sm'
                      }`}
                  >
                    <IconComponent className="text-lg" />
                    <span className="relative">
                      {item.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-green-600' : 'bg-green-300'
                        }`}></span>
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/6281234567890?text=/start"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${isScrolled
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 border border-green-500/20'
                  : 'bg-white/90 text-green-700 hover:bg-white backdrop-blur-sm border border-white/30'
                  }`}
              >
                <FaWhatsapp className="text-lg" />
                <span>Start Chat Bot</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-3 rounded-lg transition-colors ${isScrolled
                ? 'text-gray-800 hover:bg-gray-100 border border-gray-200 shadow-sm'
                : 'text-white hover:bg-white/10 border border-white/30 backdrop-blur-sm drop-shadow-md'
                }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <FaBars className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} />
                <FaTimes className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="h-full bg-white shadow-2xl overflow-y-auto safe-area-inset-bottom">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              if (item.isRoute) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-4 text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors rounded-xl ${location.pathname === item.href ? 'text-green-700 bg-green-50 shadow-sm' : ''
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="text-xl" />
                    <span className="font-medium text-lg">{item.name}</span>
                  </Link>
                );
              }
              
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-4 text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors w-full text-left rounded-xl"
                >
                  <IconComponent className="text-xl" />
                  <span className="font-medium text-lg">{item.name}</span>
                </button>
              );
            })}
            
            <div className="pt-4 pb-8">
              <a
                href="https://wa.me/6281234567890?text=/start"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 w-full shadow-lg border border-green-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaWhatsapp className="text-xl" />
                <span className="text-lg">Start Chat Bot</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;