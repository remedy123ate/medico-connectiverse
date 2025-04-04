
import React from 'react';
import { Award, Download, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in relative z-10">
            <div className="inline-block bg-accent/10 px-4 py-1 rounded-full mb-2">
              <span className="text-accent text-sm font-medium">Breaking Down Medical Silos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              We're Stronger <span className="text-medico-blue">When Connected</span>
            </h1>
            <p className="text-lg text-medico-gray">
              Download the Medico app to join a vibrant community of UK medical professionals dedicated to collaboration, innovation, and mutual support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="primary-button text-center flex items-center justify-center gap-2">
                <Download className="h-5 w-5" /> Join the Movement
              </a>
              <a href="#features" className="secondary-button text-center">
                Explore Network
              </a>
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.36C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.23 2.32-.94 3.7-.8 1.81.16 3.06.91 3.86 2.41-4.04 2.52-1.19 8.03 2.75 9.57-.78 1.58-1.74 3.16-3.39 4.8ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.62-2.96 4.72-3.74 4.25Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.519.293-.707zM14.5 12.707l2.454 2.454-9.725 5.447 7.271-7.901zm2.454-3.868l-2.454 2.454-7.27-7.901 9.724 5.447zm.271.71l4.653 2.607c.42.235.42.841 0 1.077l-4.653 2.607-2.525-2.525 2.525-2.525z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-medico-blue mr-2" />
                <span className="text-sm text-medico-gray">10,000+ UK Doctors</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-medico-blue mr-2" />
                <span className="text-sm text-medico-gray">Verified Credentials</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm text-medico-gray">4.8 App Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up md:pl-8">
            {/* Mobile app mockup */}
            <div className="relative z-10 max-w-xs mx-auto md:mx-0 animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-xl rounded-3xl"></div>
                <div className="relative bg-black rounded-[3rem] border-8 border-black overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&h=700&auto=format&fit=crop&q=80" 
                    alt="Medico App Interface"
                    className="w-full h-[550px] object-cover" 
                  />
                </div>
              </div>
              
              {/* App features overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-effect w-56">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <Users className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-medico-blue">Breaking Isolation</span>
                </div>
                <p className="text-xs text-medico-gray-light">Join a vibrant community of healthcare innovators ready to collaborate and support each other</p>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
