
import React from 'react';

const testimonialsData = [
  {
    quote: "Medico Connectiverse has transformed how I collaborate with colleagues across the country. The clinical insights I've gained have directly improved patient outcomes in my practice.",
    name: "Dr. James Wilson",
    title: "Cardiologist",
    location: "Boston, MA"
  },
  {
    quote: "As a rural physician, having access to specialists through Medico has been invaluable. The platform's user-friendly interface makes connecting with peers seamless and productive.",
    name: "Dr. Maria Rodriguez",
    title: "Family Medicine",
    location: "Santa Fe, NM"
  },
  {
    quote: "The virtual conferences have allowed me to stay current with the latest research while balancing my clinical responsibilities. It's a game-changer for busy physicians like me.",
    name: "Dr. David Chen",
    title: "Neurologist",
    location: "Chicago, IL"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-medico-blue/5 to-medico-purple/5">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted by Physicians Worldwide</h2>
          <p className="text-medico-gray-light text-lg">
            Hear from healthcare professionals who are already experiencing the benefits of Medico Connectiverse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="medico-card p-8 flex flex-col h-full"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-medico-blue opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-medico-gray mb-6 flex-grow italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-medico-gray-light text-sm">{testimonial.title}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
