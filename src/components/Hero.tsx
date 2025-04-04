
import React from 'react';
import { Award, Download, Users, Star, HeartHandshake, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-medico-hope/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-medico-inspire/20 rounded-full blur-3xl animate-pulse-gentle delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-medico-hope rounded-full animate-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full animate-glow delay-1000"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in relative z-10">
            <div className="inline-block bg-gradient-to-r from-medico-hope/20 to-accent/20 px-4 py-1 rounded-full mb-2 animate-gradient-x">
              <span className="text-medico-blue text-sm font-medium">Reconnect With Your Purpose</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Connect With Doctors <span className="text-transparent bg-clip-text bg-gradient-to-r from-medico-blue to-medico-hope animate-gradient-x">Anywhere, Anytime</span>
            </h1>
            <p className="text-lg text-medico-gray leading-relaxed">
              When medicine feels isolating, Medico brings you back to the community that understands. 
              Build meaningful connections, find mentors, and rediscover the passion that brought you to medicine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="primary-button text-center flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="h-5 w-5" /> Download App
              </a>
              <a href="#features" className="secondary-button text-center transition-all duration-300 hover:bg-medico-inspire/30">
                Explore Features
              </a>
            </div>
            
            {/* App store buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md">
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
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md">
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
            
            {/* Benefits with more inspiring icons and animations */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <Users className="h-5 w-5 text-medico-hope mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-medico-gray">10,000+ UK Doctors</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <Award className="h-5 w-5 text-medico-hope mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-medico-gray">Verified Credentials</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <HeartHandshake className="h-5 w-5 text-medico-hope mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-medico-gray">Peer Support</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <Star className="h-5 w-5 text-secondary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-medico-gray">4.8 App Rating</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                <Clock className="h-5 w-5 text-secondary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-medico-gray">24/7 Connections</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up md:pl-8">
            {/* Mobile app mockup with enhanced animation */}
            <div className="relative z-10 max-w-xs mx-auto md:mx-0 animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-medico-hope/40 to-medico-blue/40 blur-xl rounded-3xl animate-pulse-gentle"></div>
                <div className="relative bg-black rounded-[3rem] border-8 border-black overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                  
                  {/* App interface with a more motivational image */}
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&h=700&auto=format&fit=crop&q=80" 
                    alt="Doctors connecting through Medico App"
                    className="w-full h-[550px] object-cover" 
                  />
                </div>
              </div>
              
              {/* New inspirational overlay element */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg glass-effect w-48 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-medico-hope/20 p-2 rounded-full">
                    <HeartHandshake className="h-4 w-4 text-medico-hope" />
                  </div>
                  <span className="text-sm font-medium text-medico-blue">Find Mentors</span>
                </div>
                <p className="text-xs text-medico-gray-light">Connect with experienced colleagues who can guide your career path</p>
              </div>
              
              {/* App features overlay with updated styling */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-effect w-48 animate-float delay-1000">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Users className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-medico-blue">Connect Instantly</span>
                </div>
                <p className="text-xs text-medico-gray-light">Find and message colleagues anywhere in the UK healthcare system</p>
              </div>
            </div>
            
            {/* Enhanced animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-medico-hope/10 rounded-full blur-3xl animate-pulse-gentle"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse-gentle delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
