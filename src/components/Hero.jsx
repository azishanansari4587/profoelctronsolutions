import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Cloud, Code, Globe, Shield } from 'lucide-react';

const heroBox = [
    {
        icon: Cloud,
        title:"Cloud Computing"
    },
    {
        icon: Shield,
        title:"Cyber Security"
    },
    {
        icon: Globe,
        title:" Web Development"
    },
    {
        icon: Code,
        title:"Custom Software"
    }
]
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative Tech Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              We deliver cutting-edge technology services to help your business thrive in the digital landscape. From cloud solutions to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button variant="outline" className="border-white text-black hover:text-white hover:bg-white/10 transition-colors text-lg px-8 py-6" asChild>
                <Link href={"#services"}>Learn More</Link>
              </Button>
              <Button className="bg-white text-tech-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6" asChild>
                <Link href="/getStarted">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {heroBox.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-3 flex items-center justify-center text-white">
                        <Icon className='w-6 h-6'/>
                      </div>
                      <div className="h-2 w-16  rounded mb-3 text-sm mx-2">
                       {item.title}
                      </div>
                      <div className="h-2 w-24 rounded"></div>
                    </div>
                  )}
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
