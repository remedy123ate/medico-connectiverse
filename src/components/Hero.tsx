
import React from 'react';
import { Award, Network, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Connect and Showcase Your <span className="text-medico-blue">Medical Expertise</span>
            </h1>
            <p className="text-lg text-medico-gray">
              Empowering healthcare professionals to build their professional profiles, showcase achievements, and foster meaningful collaborations across the UK and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="primary-button text-center">
                Create Your Profile
              </a>
              <a href="#features" className="secondary-button text-center">
                How It Works
              </a>
            </div>
            <div className="flex space-x-6 pt-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-medico-blue mr-2" />
                <span className="text-sm text-medico-gray">10,000+ UK Doctors</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-medico-blue mr-2" />
                <span className="text-sm text-medico-gray">Verified Credentials</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up md:pl-8">
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-medico-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-medico-blue text-xl font-bold">DR</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Sarah Mitchell</h3>
                  <p className="text-medico-gray-light text-sm">Cardiology, Royal London Hospital</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs px-2 py-1 bg-medico-blue/10 text-medico-blue rounded-full mr-2">FRCP</span>
                    <span className="text-xs px-2 py-1 bg-medico-green/10 text-medico-green rounded-full">10+ Publications</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="text-sm text-medico-gray-light mb-3">Recent Collaboration Interest</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-medico-gray">Research on hypertension management in young adults</span>
                  <button className="text-medico-blue text-sm font-medium">Connect</button>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-12 bg-medico-blue/5 w-40 h-40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-12 bg-medico-blue/5 w-40 h-40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
