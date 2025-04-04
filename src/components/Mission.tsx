
import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-medico-inspire/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-medico-hope/10 rounded-full blur-3xl animate-pulse-subtle delay-1000"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-medico-blue to-medico-hope mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose lg:prose-lg max-w-none">
            <p className="text-lg text-medico-gray leading-relaxed mb-6">
              At Medico, we are dedicated to revolutionizing the healthcare landscape by building a dynamic, interconnected community of medical professionals. We strive to break down silos, foster meaningful collaborations, and empower doctors to innovate beyond traditional boundaries.
            </p>
            
            <h3 className="text-xl font-semibold text-medico-blue mb-4">Our commitment is to:</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-medico-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-medico-blue">Unite:</span> Connect healthcare professionals across all specialties, creating a powerful network that transcends geographical and institutional boundaries
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-medico-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-medico-blue">Empower:</span> Provide tools and resources that enable medical professionals to take control of their career development and professional growth
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-medico-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-medico-blue">Innovate:</span> Foster an environment where sharing ideas, best practices, and collaborative solutions leads to breakthrough improvements in healthcare delivery
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-medico-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-medico-blue">Support:</span> Build a resilient community that addresses the challenges of modern healthcare, from career uncertainty to professional isolation
                </div>
              </li>
            </ul>
            
            <p className="text-lg text-medico-gray leading-relaxed mt-6">
              Together, we're not just building a platform; we're creating a movement that will reshape the future of healthcare collaboration and innovation in the UK and beyond.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-medico-blue to-medico-hope opacity-10 blur-xl animate-pulse-subtle"></div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg relative z-10 glass-effect">
              <div className="flex justify-center mb-6">
                <span className="w-12 h-12 rounded-full bg-medico-hope/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medico-hope">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </span>
              </div>
              <p className="inspirational-quote text-xl mb-6 text-center">
                "We envision a future where every healthcare professional has the tools, network, and support needed to thrive in their career while delivering exceptional patient care."
              </p>
              <p className="text-medico-gray text-center">
                Through our platform, we're creating an ecosystem where knowledge flows freely, mentorship flourishes, and innovation drives positive change in healthcare delivery.
              </p>
            </div>
            
            {/* Animated dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-medico-hope/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-medico-blue/30 rounded-full animate-float delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
