
import React from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare } from 'lucide-react';

const featuresData = [
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
    title: "Meaningful Networking",
    description: "Build professional relationships with purpose, addressing the networking gap common in UK medical practice."
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: "Research Collaboration",
    description: "Find research partners, co-authors, and mentors to advance your academic and clinical projects."
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Local Community",
    description: "Connect with medical professionals in your region to build a strong local network within the UK healthcare system."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-secondary" />,
    title: "Publication Showcase",
    description: "Display your publications, presentations, and case studies to demonstrate your expertise to potential collaborators."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-secondary/10 px-4 py-1 rounded-full mb-2">
            <span className="text-secondary text-sm font-medium">Features & Benefits</span>
          </div>
          <h2 className="ypo-section-title mb-4">Building Medical Connections</h2>
          <p className="ypo-section-subtitle">
            Medico bridges the networking gap among UK doctors, providing tools to showcase expertise and foster meaningful professional relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="ypo-card p-8 flex flex-col h-full hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-gray-50 rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gray-50 inline-flex rounded-lg">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-medico-blue">{feature.title}</h3>
                <p className="text-medico-gray-light flex-grow text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-medico-blue">Ready to enhance your professional network?</h3>
            <p className="text-medico-gray-light mb-6">Join thousands of UK medical professionals who are building meaningful connections.</p>
            <a href="#" className="primary-button inline-block">
              Start Building Your Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
