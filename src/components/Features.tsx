
import React, { useEffect, useRef } from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare, Bell, Smartphone, Shield, Zap } from 'lucide-react';

const featuresData = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Access Anywhere",
    description: "Connect with colleagues on the go with our dedicated mobile app, available for both iOS and Android devices."
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Showcase Credentials",
    description: "Present your qualifications, specialties, and achievements in a professional profile designed specifically for medical professionals."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Find Colleagues",
    description: "Connect with specialists across the UK healthcare system, from your own hospital to institutions throughout the country."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-secondary" />,
    title: "Secure Messaging",
    description: "Communicate directly with peers through our secure, GDPR-compliant messaging system designed for healthcare professionals."
  },
  {
    icon: <Bell className="h-10 w-10 text-accent" />,
    title: "Real-time Notifications",
    description: "Stay updated with instant mobile notifications when colleagues connect, message, or share research opportunities."
  },
  {
    icon: <FileText className="h-10 w-10 text-secondary" />,
    title: "Offline Access",
    description: "View saved profiles and documents even without internet connection, perfect for busy hospital environments."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Data Privacy",
    description: "Your professional information is protected with NHS-grade security protocols and full GDPR compliance."
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Rapid Connections",
    description: "Our advanced matching algorithm helps you find the most relevant colleagues based on specialty and interests."
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = featuresRef.current?.querySelectorAll('.feature-card');
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100');
              card.classList.remove('opacity-0', 'translate-y-8');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" ref={featuresRef} className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 blur-circle bg-accent/10"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 blur-circle bg-primary/10"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 fade-in-up">
          <div className="inline-block bg-gradient-to-r from-secondary/20 to-secondary/5 px-5 py-1.5 rounded-full mb-4">
            <span className="text-secondary text-sm font-medium flex items-center justify-center">
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile App Features
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-medico-blue mb-4">Connect Anywhere, Anytime</h2>
          <p className="ypo-section-subtitle max-w-2xl mx-auto">
            The Medico mobile app brings powerful networking tools to your pocket, helping UK doctors build meaningful professional relationships wherever they are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-8 flex flex-col h-full hover:shadow-xl transition-all duration-500 relative overflow-hidden opacity-0 translate-y-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-gray-50 rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-white inline-flex rounded-lg shadow-sm">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-medico-blue font-playfair">{feature.title}</h3>
                <p className="text-medico-gray-light flex-grow text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div id="download" className="p-8 md:p-10 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-medico-blue font-playfair">Ready to connect with colleagues on the go?</h3>
            <p className="text-medico-gray-light mb-8 max-w-2xl mx-auto">Join thousands of UK medical professionals who are networking through our mobile app. Download now to experience premium features.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
