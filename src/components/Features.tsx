
import React from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare, Bell, Smartphone } from 'lucide-react';

const featuresData = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Access Anywhere",
    description: "Connect with colleagues on the go with our dedicated mobile app, available for both iOS and Android devices."
  },
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
    title: "Secure Messaging",
    description: "Communicate directly with peers through our secure, GDPR-compliant messaging system designed for healthcare professionals."
  },
  {
    icon: <Bell className="h-10 w-10 text-accent" />,
    title: "Real-time Notifications",
    description: "Stay updated with instant mobile notifications when colleagues connect, message, or share research opportunities."
  },
  {
    icon: <FileText className="h-10 w-10 text-secondary" />,
    title: "Offline Access",
    description: "View saved profiles and documents even without internet connection, perfect for busy hospital environments."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-secondary/10 px-4 py-1 rounded-full mb-2">
            <span className="text-secondary text-sm font-medium">Mobile App Features</span>
          </div>
          <h2 className="ypo-section-title mb-4">Connect Anywhere, Anytime</h2>
          <p className="ypo-section-subtitle">
            The Medico mobile app brings networking tools to your pocket, helping UK doctors build meaningful professional relationships wherever they are.
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
            <h3 className="text-2xl font-semibold mb-4 text-medico-blue">Ready to connect with colleagues on the go?</h3>
            <p className="text-medico-gray-light mb-6">Join thousands of UK medical professionals who are networking through our mobile app.</p>
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
