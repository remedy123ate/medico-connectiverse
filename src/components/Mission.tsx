
import React from 'react';
import { Users, Lightbulb, Star, HandshakeIcon } from 'lucide-react';

const values = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Unite",
    description: "Building bridges across specialties and institutions"
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: "Empower",
    description: "Taking control of your professional journey"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    title: "Innovate",
    description: "Sharing ideas that transform healthcare delivery"
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Support",
    description: "Building resilience in the medical community"
  }
];

const Mission = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-4 py-1 rounded-full mb-4">
                <span className="text-primary text-sm font-medium">Our Vision for Healthcare</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-medico-blue mb-6">
                Reshaping the Future of Medical Collaboration
              </h2>
              <p className="text-lg text-medico-gray-light max-w-3xl mx-auto">
                We're creating a movement where knowledge flows freely, mentorship flourishes, and innovation drives positive change.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-medico-blue text-center mb-2">{value.title}</h3>
                  <p className="text-medico-gray-light text-center text-sm">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-duration-300 bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-medico-blue">Join the Movement</h3>
              <p className="text-medico-gray-light mb-6 max-w-2xl mx-auto">
                Together, we're creating something bigger than a platform - a community that will reshape healthcare collaboration in the UK and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="primary-button inline-flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Connect Now
                </a>
                <a href="#" className="secondary-button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
