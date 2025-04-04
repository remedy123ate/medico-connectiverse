
import React from 'react';
import { BookOpen, Award, Users, MapPin, FileText, MessageSquare, Bell, Smartphone, HeartHandshake, Briefcase, Lightbulb, Share2 } from 'lucide-react';

const featuresData = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-medico-hope" />,
    title: "Renew Your Purpose",
    description: "Connect with colleagues who share your challenges and aspirations, helping you rediscover meaning in your medical practice."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-medico-blue" />,
    title: "Access Anywhere",
    description: "Find support whenever you need it with our dedicated mobile app, designed to fit the demanding schedule of a medical professional."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    title: "Share Knowledge",
    description: "Exchange insights and learning opportunities that help you grow professionally while supporting others on their journey."
  },
  {
    icon: <Users className="h-10 w-10 text-medico-hope" />,
    title: "Find Your Community",
    description: "Connect with specialists who understand your unique challenges and can offer both professional advice and emotional support."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-medico-blue" />,
    title: "Meaningful Conversations",
    description: "Engage in secure discussions that go beyond clinical talk to address the personal aspects of a medical career."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-secondary" />,
    title: "Career Opportunities",
    description: "Discover new professional paths and collaborations that might never have crossed your path within your current institution."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-medico-hope/5 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-medico-inspire/10 rounded-full blur-3xl animate-pulse-gentle delay-1000"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-gradient-to-r from-medico-hope/20 to-accent/20 px-4 py-1 rounded-full mb-2 animate-gradient-x">
            <span className="text-medico-blue text-sm font-medium">Rediscover Connection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-medico-blue to-medico-hope animate-gradient-x">Tools for Reconnection</h2>
          <p className="text-lg text-medico-gray-light">
            The Medico app provides the tools you need to build a supportive network of colleagues who understand your journey and can help you navigate challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 flex flex-col h-full hover:shadow-md transition-all duration-300 relative overflow-hidden transform hover:translate-y-[-5px] group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-gray-50 rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gray-50 inline-flex rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-medico-hope/10 group-hover:to-medico-inspire/10">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-medico-blue">{feature.title}</h3>
                <p className="text-medico-gray-light flex-grow text-sm leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Subtle decoration for visual interest */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-r from-transparent to-medico-hope/5 rounded-tl-full"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-transparent to-medico-hope/30"></div>
          
          <div className="p-8 md:p-10 bg-gradient-to-r from-medico-blue/5 to-medico-hope/5 rounded-xl max-w-3xl mx-auto backdrop-blur-sm border border-white/40 shadow-xl animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-medico-blue to-medico-hope animate-gradient-x">
              Ready to reconnect with your medical community?
            </h3>
            <p className="text-medico-gray mb-6">
              Join thousands of UK doctors who've found renewed purpose through connecting with colleagues who understand.
            </p>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-medico-blue to-medico-hope text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <Smartphone className="h-5 w-5" />
              Download the App
            </a>
            
            {/* Testimonial preview as social proof */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&auto=format&fit=crop&q=80" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=50&h=50&auto=format&fit=crop&q=80" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&auto=format&fit=crop&q=80" alt="User" />
              </div>
              <p className="text-sm text-medico-gray-light">Join 10,000+ doctors already reconnecting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
