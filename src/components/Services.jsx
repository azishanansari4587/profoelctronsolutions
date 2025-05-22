import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/lib/data';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of technology services to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="animate-slide-up" style={{animationDelay: `${(service.id - 1) * 100}ms`}}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                iconColor={service.iconColor}
                slug={service.slug}
              />
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <a href="#services" className="bg-tech-blue text-white hover:bg-tech-lightBlue transition-colors px-8 py-3 rounded-md font-semibold text-lg inline-block">
            Explore All Services
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Services;