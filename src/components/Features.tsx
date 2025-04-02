
import React from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare } from 'lucide-react';

const featuresData = [
  {
    icon: <Award className="h-8 w-8 text-medico-blue" />,
    title: "Showcase Credentials",
    description: "Present your qualifications, specialties, and achievements in a professional profile designed specifically for medical professionals."
  },
  {
    icon: <Users className="h-8 w-8 text-medico-blue" />,
    title: "Find Colleagues",
    description: "Connect with specialists across the UK healthcare system, from your own hospital to institutions throughout the country."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-medico-blue" />,
    title: "Meaningful Networking",
    description: "Build professional relationships with purpose, addressing the networking gap common in UK medical practice."
  },
  {
    icon: <FileText className="h-8 w-8 text-medico-blue" />,
    title: "Research Collaboration",
    description: "Find research partners, co-authors, and mentors to advance your academic and clinical projects."
  },
  {
    icon: <MapPin className="h-8 w-8 text-medico-blue" />,
    title: "Local Community",
    description: "Connect with medical professionals in your region to build a strong local network within the UK healthcare system."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-medico-blue" />,
    title: "Publication Showcase",
    description: "Display your publications, presentations, and case studies to demonstrate your expertise to potential collaborators."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="ypo-section-title mb-4">Building Medical Connections</h2>
          <p className="ypo-section-subtitle">
            Medico bridges the networking gap among UK doctors, providing tools to showcase expertise and foster meaningful professional relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="ypo-card p-6 flex flex-col h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-medico-blue">{feature.title}</h3>
              <p className="text-medico-gray-light flex-grow text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="primary-button inline-block">
            Start Building Your Network
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
