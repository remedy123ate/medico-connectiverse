
import React from 'react';

const testimonialsData = [
  {
    quote: "Before Medico, I struggled to connect with colleagues outside my hospital. Now I've built a network across the UK that has led to two research collaborations and improved my practice.",
    name: "Dr. James Williams",
    title: "Gastroenterology",
    location: "Manchester Royal Infirmary"
  },
  {
    quote: "As a newly qualified consultant, I found it difficult to establish myself in the wider medical community. Medico has allowed me to showcase my research and connect with mentors across the UK.",
    name: "Dr. Priya Sharma",
    title: "Neurology",
    location: "University College London Hospital"
  },
  {
    quote: "The platform addressed exactly what was missing in my professional life - a way to connect with other physicians meaningfully. I've since built a network that spans across several NHS trusts.",
    name: "Dr. Thomas Chen",
    title: "Respiratory Medicine",
    location: "Royal Brompton Hospital, London"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="ypo-section-title mb-4">UK Doctors Building Connections</h2>
          <p className="ypo-section-subtitle">
            Hear from healthcare professionals who have overcome networking challenges through Medico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="ypo-card p-8 flex flex-col h-full"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-medico-blue opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-medico-gray mb-6 flex-grow italic text-sm leading-relaxed">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-medico-blue">{testimonial.name}</p>
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
