
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
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-medico-blue text-2xl font-bold mr-1">Medico</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium">
              Features
            </a>
            <div className="relative">
              <button 
                className="flex items-center text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
                onClick={toggleDropdown}
              >
                For Doctors <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50">
                    Clinical Practice
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50">
                    Research Collaboration
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50">
                    Career Development
                  </a>
                </div>
              )}
            </div>
            <a href="#testimonials" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium">
              Success Stories
            </a>
            <a href="#" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-medico-blue hover:text-medico-blue/80 font-medium transition duration-300 text-sm">
              Sign In
            </a>
            <a 
              href="#" 
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-medico-blue hover:bg-medico-blue/90 transition duration-300"
            >
              Create Profile
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
              className="block text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
              onClick={toggleMenu}
            >
              For Doctors
            </a>
            <a 
              href="#testimonials" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
              onClick={toggleMenu}
            >
              Success Stories
            </a>
            <a 
              href="#" 
              className="block text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
              onClick={toggleMenu}
            >
              About
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-medico-blue hover:text-medico-blue/80 font-medium transition duration-300 text-sm"
                onClick={toggleMenu}
              >
                Sign In
              </a>
              <a 
                href="#" 
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-medico-blue hover:bg-medico-blue/90 transition duration-300 text-center"
                onClick={toggleMenu}
              >
                Create Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
