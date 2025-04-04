
import React, { useEffect, useRef } from 'react';
import { Star, Download, Users, Check, ArrowRight } from 'lucide-react';

const AnimatedAppDownload = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
          elements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('opacity-100');
              el.classList.remove('opacity-0', 'translate-y-8');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-64 h-64 blur-circle bg-primary/10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 blur-circle bg-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="inline-block bg-gradient-to-r from-secondary/20 to-secondary/5 px-5 py-1.5 rounded-full mb-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                <span className="text-secondary text-sm font-medium flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Our Mobile App
                </span>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-medico-blue leading-tight animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                Elevate Your Medical Network with the Medico App
              </h2>
              
              <p className="text-medico-gray-light leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                Access your professional medical network anywhere, connect with colleagues, and advance your career - all from your smartphone. Our mobile app is designed specifically for UK medical professionals.
              </p>
              
              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                {['Verified professional profiles', 'Secure messaging with colleagues', 'Personalized network recommendations', 'Research collaboration opportunities'].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 p-1 rounded-full bg-gradient-to-r from-secondary to-secondary/70">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-medico-gray">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                <a href="#" className="app-store-button group">
                  <div className="mr-3 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.36C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.23 2.32-.94 3.7-.8 1.81.16 3.06.91 3.86 2.41-4.04 2.52-1.19 8.03 2.75 9.57-.78 1.58-1.74 3.16-3.39 4.8ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.62-2.96 4.72-3.74 4.25Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="app-store-button group">
                  <div className="mr-3 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.519.293-.707zM14.5 12.707l2.454 2.454-9.725 5.447 7.271-7.901zm2.454-3.868l-2.454 2.454-7.27-7.901 9.724 5.447zm.271.71l4.653 2.607c.42.235.42.841 0 1.077l-4.653 2.607-2.525-2.525 2.525-2.525z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center space-x-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-medico-gray">4.8 rating (500+ reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center fade-in-right">
            <div className="relative">
              {/* Main phone */}
              <div className="relative z-20 transform rotate-6 animate-float">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-xl rounded-3xl"></div>
                  <div className="relative bg-black rounded-[3rem] border-8 border-black overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&h=700&auto=format&fit=crop&q=80" 
                      alt="Medico App Interface 1"
                      className="w-full h-[500px] object-cover" 
                    />
                  </div>
                </div>
                
                {/* Floating stat card */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg glass-effect animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-accent/20 p-1.5 rounded-full">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-medico-blue">New Connections</span>
                  </div>
                  <p className="text-xs text-medico-gray-light">+28% this month</p>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-accent to-primary h-full w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Secondary phone (background) */}
              <div className="absolute left-16 top-20 z-10 opacity-80 scale-90 transform -rotate-6">
                <div className="relative bg-black rounded-[3rem] border-8 border-black overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=350&h=700&auto=format&fit=crop&q=80" 
                    alt="Medico App Interface 2"
                    className="w-full h-[500px] object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAppDownload;
