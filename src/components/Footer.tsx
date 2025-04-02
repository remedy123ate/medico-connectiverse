
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-medico-gray py-12 text-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <span className="text-white text-xl font-bold mr-1">Medico</span>
              <span className="text-medico-blue font-semibold">Connectiverse</span>
            </div>
            <p className="text-medico-gray-light max-w-xs">
              The premier digital platform connecting medical professionals worldwide for collaboration, knowledge sharing, and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Secure Discussions</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Global Network</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Virtual Events</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Resource Library</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Collaboration Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Leadership</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Research</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Guidelines</a></li>
              <li><a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300">Webinars</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-medico-gray-light/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-medico-gray-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Medico Connectiverse. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-medico-gray-light hover:text-white transition-colors duration-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
