
import React, { useEffect, useRef } from 'react';
import { Award, Download, Users, Star, ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 blur-circle bg-accent/20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 blur-circle bg-secondary/20"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 blur-circle bg-primary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 fade-in-left">
            <div className="inline-block bg-gradient-to-r from-accent/20 to-primary/20 px-4 py-1.5 rounded-full mb-2 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
              <span className="text-primary text-sm font-medium flex items-center">
                <span className="bg-white p-1 rounded-full mr-2">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                UK Medical Professionals Network
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
              <span className="font-playfair">Connect With Doctors </span>
              <span className="gradient-text font-playfair">Anywhere, Anytime</span>
            </h1>
            
            <p className="text-lg text-medico-gray leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
              Download the Medico app to build your professional profile, showcase achievements, and foster meaningful collaborations with UK medical professionals on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
              <a href="#download" className="primary-button text-center flex items-center justify-center gap-2 group">
                <Download className="h-5 w-5 group-hover:animate-bounce" /> 
                Download App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="secondary-button text-center">
                Explore Features
              </a>
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
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
            
            <div className="flex flex-wrap gap-6 pt-4 animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out">
              <div className="flex items-center">
                <div className="bg-secondary/10 p-1.5 rounded-full mr-2">
                  <Users className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-sm text-medico-gray">10,000+ UK Doctors</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-1.5 rounded-full mr-2">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-medico-gray">Verified Credentials</span>
              </div>
              <div className="flex items-center">
                <div className="bg-accent/10 p-1.5 rounded-full mr-2">
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-medico-gray">4.8 App Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-right">
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
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 px-4 py-2 bg-white rounded-lg shadow-lg glass-effect animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out max-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-medico-blue/10 p-1.5 rounded-full">
                      <Award className="h-4 w-4 text-medico-blue" />
                    </div>
                    <span className="text-sm font-medium text-medico-blue">Royal College Verified</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent h-full w-4/5 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-effect animate-on-scroll opacity-0 translate-y-8 transition duration-700 ease-out delay-300 max-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-secondary/20 p-1.5 rounded-full">
                      <Users className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-medico-blue">Connect Instantly</span>
                  </div>
                  <p className="text-xs text-medico-gray-light">Find and message colleagues anywhere in the UK healthcare system</p>
                </div>
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
