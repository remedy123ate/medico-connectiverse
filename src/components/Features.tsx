
import React from 'react';
import { MessageSquare, Users, Calendar, FileText, Activity, Share2 } from 'lucide-react';

const featuresData = [
  {
    icon: <MessageSquare className="h-10 w-10 text-medico-blue" />,
    title: "Secure Discussions",
    description: "Exchange ideas and discuss complex cases in a secure, HIPAA-compliant environment exclusive to verified medical professionals."
  },
  {
    icon: <Users className="h-10 w-10 text-medico-blue" />,
    title: "Global Network",
    description: "Connect with specialists from around the world, expanding your professional network across borders and specialties."
  },
  {
    icon: <Calendar className="h-10 w-10 text-medico-blue" />,
    title: "Virtual Events",
    description: "Participate in virtual conferences, CME opportunities, and expert-led webinars without leaving your practice."
  },
  {
    icon: <FileText className="h-10 w-10 text-medico-blue" />,
    title: "Resource Library",
    description: "Access a comprehensive library of peer-reviewed research, clinical guidelines, and educational materials."
  },
  {
    icon: <Activity className="h-10 w-10 text-medico-blue" />,
    title: "Clinical Insights",
    description: "Gain valuable perspectives from frontline physicians on treatments, procedures, and patient care strategies."
  },
  {
    icon: <Share2 className="h-10 w-10 text-medico-blue" />,
    title: "Collaboration Tools",
    description: "Utilize powerful tools for seamless collaboration on research, publications, and clinical initiatives."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Empowering Healthcare Professionals</h2>
          <p className="text-medico-gray-light text-lg">
            Medico Connectiverse offers a comprehensive suite of tools and features designed specifically for medical professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="medico-card p-6 flex flex-col h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-medico-gray-light flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="primary-button inline-block">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
