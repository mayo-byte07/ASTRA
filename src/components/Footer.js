import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-section text-main border-t border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-main">Astra</span>
            </div>
            <p className="text-subtle mb-6 max-w-md">
              One Voice Can Save You. Be Heard, Even in Silence. 
              Empowering girls through AI and IoT technology for their safety and security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-subtle hover:text-astra-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-subtle hover:text-astra-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-subtle hover:text-astra-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-subtle hover:text-astra-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-astra-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-gray-300 hover:text-astra-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-astra-primary transition-colors">
                  Try Demo
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-astra-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-astra-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-astra-primary" />
                <span className="text-gray-300">piyushgdevg.in@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-astra-primary" />
                <span className="text-gray-300">+91 7386813230</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-astra-primary" />
                <span className="text-gray-300">Roorkee Uttrakhand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Astra Safety System. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/support" className="text-gray-400 hover:text-astra-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/support" className="text-gray-400 hover:text-astra-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/support" className="text-gray-400 hover:text-astra-primary text-sm transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 