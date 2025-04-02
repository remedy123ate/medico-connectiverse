
import React from 'react';
import { Award, Network, Users } from 'lucide-react';

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
              <span className="text-accent text-sm font-medium">UK Medical Professionals Network</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Connect and Showcase Your <span className="text-medico-blue">Medical Expertise</span>
            </h1>
            <p className="text-lg text-medico-gray">
              Empowering healthcare professionals to build their professional profiles, showcase achievements, and foster meaningful collaborations across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="primary-button text-center">
                Create Your Profile
              </a>
              <a href="#features" className="secondary-button text-center">
                Explore Features
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
            </div>
          </div>
          
          <div className="relative animate-slide-up md:pl-8">
            {/* Profile Card */}
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-medico-blue to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">DR</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Sarah Mitchell</h3>
                  <p className="text-medico-gray-light text-sm">Cardiology, Royal London Hospital</p>
                  <div className="flex items-center mt-2 flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">FRCP</span>
                    <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">10+ Publications</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Teaching Lead</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-sm text-medico-gray-light mb-3 font-medium">Research Interests</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-white border border-gray-200 text-medico-gray rounded-full">Hypertension Management</span>
                  <span className="text-xs px-2 py-1 bg-white border border-gray-200 text-medico-gray rounded-full">Heart Failure</span>
                  <span className="text-xs px-2 py-1 bg-white border border-gray-200 text-medico-gray rounded-full">Preventative Cardiology</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-medico-gray-light mb-3">Recent Collaboration Interest</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-medico-gray">Research on hypertension management in young adults</span>
                  <button className="text-medico-blue text-sm font-medium hover:text-accent transition-colors">Connect</button>
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
