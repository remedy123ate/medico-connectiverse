
import React from 'react';
import { Check } from 'lucide-react';

const benefitsList = [
  "Exclusive physician-only community",
  "HIPAA-compliant secure messaging",
  "Access to global medical experts",
  "Virtual conferences and CME opportunities",
  "Collaboration tools for medical professionals"
];

const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-medico-blue to-medico-purple rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community of Medical Professionals</h2>
              <p className="mb-8 text-white/90">
                Connect with peers, share knowledge, and advance your practice with Medico Connectiverse.
              </p>
              <div className="space-y-3 mb-8">
                {benefitsList.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div>
                <a href="#" className="inline-block bg-white text-medico-blue font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors duration-300">
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-medico-gray">Create Your Free Account</h3>
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
                    className="w-full primary-button text-center"
                  >
                    Join Medico Connectiverse
                  </button>
                </form>
                <p className="mt-4 text-xs text-medico-gray-light text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
