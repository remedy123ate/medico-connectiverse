
import React, { useEffect, useRef } from 'react';
import { Badge } from './ui/badge';
import { Quote, Star } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Before Medico, I struggled to connect with colleagues outside my hospital. Now I've built a network across the UK that has led to two research collaborations and improved my practice.",
    name: "Dr. James Williams",
    title: "Gastroenterology",
    location: "Manchester Royal Infirmary",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "As a newly qualified consultant, I found it difficult to establish myself in the wider medical community. Medico has allowed me to showcase my research and connect with mentors across the UK.",
    name: "Dr. Priya Sharma",
    title: "Neurology",
    location: "University College London Hospital",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "The platform addressed exactly what was missing in my professional life - a way to connect with other physicians meaningfully. I've since built a network that spans across several NHS trusts.",
    name: "Dr. Thomas Chen",
    title: "Respiratory Medicine",
    location: "Royal Brompton Hospital, London",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&auto=format&fit=crop&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100');
              card.classList.remove('opacity-0', 'translate-y-8');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="testimonials" ref={testimonialsRef} className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 blur-circle bg-secondary/10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 blur-circle bg-accent/10"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 fade-in-up">
          <Quote className="h-12 w-12 text-accent/30 mx-auto mb-4" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-medico-blue mb-4">UK Doctors Building Connections</h2>
          <p className="ypo-section-subtitle max-w-2xl mx-auto">
            Hear from healthcare professionals who have overcome networking challenges through Medico's mobile app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card p-8 flex flex-col h-full hover:shadow-xl transition-all duration-500 relative overflow-hidden opacity-0 translate-y-8 rounded-xl bg-white border border-gray-100 shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-accent/10 rounded-full"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="mr-4 w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20 shadow-md">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-medico-blue">{testimonial.name}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      {testimonial.title}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-medico-gray mb-6 flex-grow italic text-sm leading-relaxed">{testimonial.quote}</p>
              
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <p className="text-medico-gray-light text-sm">{testimonial.location}</p>
                <div className="text-xs text-white px-2 py-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                  Verified User
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
