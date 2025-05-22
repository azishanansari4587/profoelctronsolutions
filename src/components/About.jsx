import React from 'react';
import { stats } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Profoelctron Solution</h2>
            <div className="h-1 w-24 bg-tech-blue mb-6"></div>
            <p className="text-gray-600 mb-6">
              Profoelctron Solution is a premier technology consulting firm with over 10 years of experience delivering innovative solutions to businesses across industries. Our team of experts combines deep technical knowledge with strategic thinking to help our clients navigate the complex digital landscape.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. This partnership allows us to deliver customized solutions that drive real business value and sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-tech-lightBlue/10 px-6 py-3 rounded-full">
                <span className="text-tech-blue font-semibold">Innovative Solutions</span>
              </div>
              <div className="bg-tech-lightBlue/10 px-6 py-3 rounded-full">
                <span className="text-tech-blue font-semibold">Expert Team</span>
              </div>
              <div className="bg-tech-lightBlue/10 px-6 py-3 rounded-full">
                <span className="text-tech-blue font-semibold">Client Focused</span>
              </div>
              <div className="bg-tech-lightBlue/10 px-6 py-3 rounded-full">
                <span className="text-tech-blue font-semibold">Results Driven</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-tech-blue mb-2">{stat.value}</div>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-tech-blue text-white p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Discover:</span> We take time to understand your business and its unique challenges</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-tech-blue text-white p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Design:</span> We create tailored solutions that align with your goals</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-tech-blue text-white p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Develop:</span> We implement solutions with precision and expertise</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-tech-blue text-white p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Deploy:</span> We ensure smooth implementation and ongoing support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;