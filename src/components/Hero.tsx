
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-medico-blue/10 to-medico-purple/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-medico-blue">Connect</span> with Medical Professionals Worldwide
            </h1>
            <p className="text-lg md:text-xl text-medico-gray">
              Join the exclusive community where physicians and healthcare professionals collaborate, share insights, and advance medicine together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="primary-button text-center">
                Join Now
              </a>
              <a href="#features" className="secondary-button text-center">
                Explore Features
              </a>
            </div>
            <div className="pt-4 text-medico-gray-light text-sm">
              <p>Already trusted by <span className="font-bold text-medico-blue">50,000+</span> medical professionals worldwide</p>
            </div>
          </div>
          
          <div className="relative animate-slide-up md:pl-8">
            <div className="relative z-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl">
              <div className="aspect-video bg-medico-blue/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-medico-blue text-6xl font-bold">M</div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-medico-gray">Virtual Medical Conference</h3>
                <p className="text-medico-gray-light">Join Dr. Sarah Chen and colleagues for the latest advances in cardiology</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-medico-green font-medium">Starting in 2 days</span>
                  <button className="text-medico-blue text-sm font-medium">Register →</button>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-12 bg-medico-purple/10 w-40 h-40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-12 bg-medico-blue/20 w-40 h-40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
