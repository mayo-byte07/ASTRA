import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tech', path: '/tech' },
    { name: 'AI Features', path: '/ai' },
    { name: 'Demo', path: '/demo' },
    { name: 'Partners', path: '/partners' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-gradient">Astra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-astra-primary'
                    : 'text-gray-600 hover:text-astra-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth + Theme Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="btn-secondary text-sm">
              <User className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
            <Link to="/guardian" className="btn-primary text-sm">
              <LogIn className="w-4 h-4 mr-2" />
              Guardian
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-astra-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-astra-primary bg-astra-light'
                      : 'text-gray-600 hover:text-astra-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-base font-medium text-astra-primary rounded-md hover:bg-astra-light"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 inline mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/guardian"
                  className="block px-3 py-2 text-base font-medium bg-astra-primary text-white rounded-md hover:bg-astra-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-4 h-4 inline mr-2" />
                  Guardian
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 