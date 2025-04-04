
import React from 'react';
import { Badge } from './ui/badge';
import { Quote, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const testimonialsData = [
  {
    quote: "After feeling burned out and isolated in my practice, Medico connected me with mentors who reignited my passion for medicine. I've built a network that understands both my professional challenges and personal struggles.",
    name: "Dr. James Williams",
    title: "Gastroenterology",
    location: "Manchester Royal Infirmary",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&auto=format&fit=crop&q=80",
    tag: "Found Mentorship"
  },
  {
    quote: "As a junior doctor feeling overwhelmed by the responsibilities, I found colleagues on Medico who offered guidance and reassurance. Having a community to share experiences with has transformed my confidence and outlook.",
    name: "Dr. Priya Sharma",
    title: "Neurology",
    location: "University College London Hospital",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&auto=format&fit=crop&q=80",
    tag: "Renewed Confidence"
  },
  {
    quote: "The isolation I felt as the only specialist in my hospital was taking a toll on my wellbeing. Through Medico, I've found peers across the UK who understand my specific challenges. I no longer feel alone in my journey.",
    name: "Dr. Thomas Chen",
    title: "Respiratory Medicine",
    location: "Royal Brompton Hospital, London",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&auto=format&fit=crop&q=80",
    tag: "Overcame Isolation"
  },
  {
    quote: "When I was considering leaving medicine altogether, I found a group of doctors on Medico who had walked that same path. Their support and perspective helped me find a new specialty that reignited my commitment to healthcare.",
    name: "Dr. Sarah Johnson",
    title: "Palliative Care",
    location: "St. Christopher's Hospice",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&auto=format&fit=crop&q=80",
    tag: "Found New Path"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-medico-hope/5 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-medico-inspire/10 rounded-full blur-3xl animate-pulse-gentle delay-1000"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-gradient-to-r from-medico-hope/20 to-accent/20 px-4 py-1 rounded-full mb-2 animate-gradient-x">
            <span className="text-medico-blue text-sm font-medium">Journeys of Renewal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-medico-blue to-medico-hope animate-gradient-x">
            Stories of Reconnection
          </h2>
          <p className="text-lg text-medico-gray-light">
            Hear from doctors who found new purpose and community through Medico when they needed it most.
          </p>
        </div>
        
        <div className="relative px-4 md:px-12 py-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden transform hover:translate-y-[-5px]">
                    <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-accent/10 rounded-full"></div>
                    
                    <Quote className="h-8 w-8 text-medico-hope opacity-30 mb-4" />
                    
                    <p className="text-medico-gray mb-6 flex-grow italic text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="mt-4 flex items-center">
                      <div className="mr-4 w-14 h-14 rounded-full overflow-hidden border-2 border-medico-hope/20">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-medico-blue">{testimonial.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
                            {testimonial.title}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <p className="text-medico-gray-light text-xs">{testimonial.location}</p>
                      <Badge variant="outline" className="bg-medico-hope/10 text-medico-hope border-medico-hope/20">
                        {testimonial.tag}
                      </Badge>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-medico-blue hover:text-medico-hope transition-colors gap-2 font-medium">
            Read more stories <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
