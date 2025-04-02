
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-medico-blue text-xl font-bold mr-1">Medico</span>
                <span className="text-medico-purple font-semibold">Connectiverse</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-medico-gray hover:text-medico-blue transition duration-300">
              Features
            </a>
            <div className="relative">
              <button 
                className="flex items-center text-medico-gray hover:text-medico-blue transition duration-300"
                onClick={toggleDropdown}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-medico-blue hover:text-white">
                    For Physicians
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-medico-blue hover:text-white">
                    For Hospitals
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-medico-blue hover:text-white">
                    For Researchers
                  </a>
                </div>
              )}
            </div>
            <a href="#testimonials" className="text-medico-gray hover:text-medico-blue transition duration-300">
              Testimonials
            </a>
            <a href="#" className="text-medico-gray hover:text-medico-blue transition duration-300">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-medico-blue hover:text-medico-blue/80 font-medium transition duration-300">
              Log in
            </a>
            <a 
              href="#" 
              className="primary-button"
            >
              Join Medico
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-medico-gray hover:text-medico-blue"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a 
              href="#features" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300"
              onClick={toggleMenu}
            >
              Solutions
            </a>
            <a 
              href="#testimonials" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-medico-blue hover:text-medico-blue/80 font-medium transition duration-300"
                onClick={toggleMenu}
              >
                Log in
              </a>
              <a 
                href="#" 
                className="primary-button text-center"
                onClick={toggleMenu}
              >
                Join Medico
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
