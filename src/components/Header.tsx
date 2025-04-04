
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-medico-blue text-2xl font-bold mr-1 font-playfair">Medico</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-medico-blue/80 after:origin-bottom-left after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
              Features
            </a>
            <div className="relative group">
              <button 
                className="flex items-center text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium"
                onClick={toggleDropdown}
              >
                For Doctors <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-10 transition-all duration-200 ease-in-out transform origin-top ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50 hover:text-medico-blue transition duration-150">
                  Clinical Practice
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50 hover:text-medico-blue transition duration-150">
                  Research Collaboration
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-medico-gray hover:bg-gray-50 hover:text-medico-blue transition duration-150">
                  Career Development
                </a>
              </div>
            </div>
            <a href="#testimonials" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-medico-blue/80 after:origin-bottom-left after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
              Success Stories
            </a>
            <a href="#" className="text-medico-gray hover:text-medico-blue transition duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-medico-blue/80 after:origin-bottom-left after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-medico-blue hover:text-medico-blue/80 font-medium transition duration-300 text-sm">
              Sign In
            </a>
            <a 
              href="#download" 
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-medico-blue to-accent hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center"
            >
              <Download className="mr-2 h-4 w-4" /> Download App
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-medico-gray hover:text-medico-blue transition-colors"
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
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${isMenuOpen ? 'max-h-96' : ''}`}>
        <div className="container mx-auto px-4 py-6 space-y-4">
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
              href="#download" 
              className="px-4 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-medico-blue to-accent hover:opacity-90 transition duration-300 text-center flex justify-center items-center"
              onClick={toggleMenu}
            >
              <Download className="mr-2 h-4 w-4" /> Download App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
