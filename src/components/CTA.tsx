
import React from 'react';
import { Check, Download } from 'lucide-react';

const benefitsList = [
  "Exclusive physician-only mobile community",
  "Secure messaging with colleagues",
  "Access to UK medical experts on-the-go",
  "Real-time notifications for connections",
  "Offline access to important profiles"
];

const CTA = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto bg-medico-blue rounded-md overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Medico Today</h2>
              <p className="mb-8 text-white/90">
                Take your professional network with you. Connect with peers, share knowledge, and advance your practice.
              </p>
              <div className="space-y-3 mb-8">
                {benefitsList.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center bg-black/20 hover:bg-black/30 text-white px-4 py-2 rounded-lg transition-colors">
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
                <a href="#" className="flex items-center bg-black/20 hover:bg-black/30 text-white px-4 py-2 rounded-lg transition-colors">
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
            </div>
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <div className="rounded-md relative">
                <h3 className="text-xl font-semibold mb-4 text-medico-blue">Get Early Access</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-medico-gray-light mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-medico-gray-lighter rounded-md focus:ring-2 focus:ring-medico-blue focus:border-transparent"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-medico-gray-light mb-1">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-medico-gray-lighter rounded-md focus:ring-2 focus:ring-medico-blue focus:border-transparent"
                      placeholder="jane.smith@hospital.org"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-medico-gray-light mb-1">Specialty</label>
                    <select 
                      id="specialty" 
                      className="w-full px-4 py-2 border border-medico-gray-lighter rounded-md focus:ring-2 focus:ring-medico-blue focus:border-transparent"
                    >
                      <option value="">Select your specialty</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="emergency">Emergency Medicine</option>
                      <option value="family">Family Medicine</option>
                      <option value="internal">Internal Medicine</option>
                      <option value="neurology">Neurology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full primary-button inline-flex items-center justify-center gap-2 text-center"
                  >
                    <Download className="h-5 w-5" />
                    Join Beta Program
                  </button>
                </form>
                <p className="mt-4 text-xs text-medico-gray-light text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
                
                {/* QR Code for app download */}
                <div className="mt-6 p-4 border border-gray-100 rounded-lg bg-gray-50 flex items-center">
                  <div className="w-20 h-20 bg-white p-1 mr-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="white" />
                      <path d="M30,30 L30,45 L45,45 L45,30 Z M50,30 L50,35 L55,35 L55,30 Z M60,30 L60,35 L65,35 L65,40 L70,40 L70,35 L75,35 L75,30 Z M30,50 L30,55 L35,55 L35,50 Z M40,50 L40,65 L45,65 L45,70 L50,70 L50,65 L55,65 L55,60 L50,60 L50,55 L45,55 L45,50 Z M70,50 L70,55 L65,55 L65,65 L60,65 L60,70 L70,70 L70,65 L75,65 L75,55 L70,55 Z M30,60 L30,70 L35,70 L35,60 Z" fill="black" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-medico-blue">Scan to download</p>
                    <p className="text-xs text-medico-gray-light">Or visit medico.app/download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
