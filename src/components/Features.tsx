
import React from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare, Bell, Smartphone, Lightbulb } from 'lucide-react';

const featuresData = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Community Building",
    description: "Connect with like-minded doctors to break isolation and build a supportive professional network."
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Knowledge Sharing",
    description: "Share your expertise and learn from others in a collaborative ecosystem that values diverse perspectives."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation Hub",
    description: "Participate in discussions that lead to breakthrough improvements in healthcare delivery and practices."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-secondary" />,
    title: "Meaningful Connections",
    description: "Form relationships that transcend geographical and institutional boundaries across the UK."
  },
  {
    icon: <Bell className="h-10 w-10 text-accent" />,
    title: "Career Development",
    description: "Access resources and mentorship opportunities that empower your professional growth journey."
  },
  {
    icon: <FileText className="h-10 w-10 text-secondary" />,
    title: "Collaborative Tools",
    description: "Utilize purpose-built features that enable seamless collaboration and resource sharing between peers."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-secondary/10 px-4 py-1 rounded-full mb-2">
            <span className="text-secondary text-sm font-medium">Building Together</span>
          </div>
          <h2 className="ypo-section-title mb-4">Empowering Medical Professionals</h2>
          <p className="ypo-section-subtitle">
            The Medico platform provides the tools and community to help you thrive professionally while delivering exceptional patient care.
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
            <h3 className="text-2xl font-semibold mb-4 text-medico-blue">Ready to join our medical community?</h3>
            <p className="text-medico-gray-light mb-6">Be part of a movement reshaping healthcare collaboration and innovation in the UK.</p>
            <a href="#" className="primary-button inline-flex items-center justify-center gap-2">
              <Smartphone className="h-5 w-5" />
              Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
