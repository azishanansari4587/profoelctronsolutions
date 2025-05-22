import React from 'react';
import { Star } from 'lucide-react';


const TestimonialCard = ({ name, company, quote, image, rating = 5 }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-tech-blue flex items-center justify-center text-white text-xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};



const Testimonials = ({ testimonials, title = "What Our Clients Say", service }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
          {service && (
            <p className="text-lg text-gray-600">
              See what clients say about our {service} services.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;