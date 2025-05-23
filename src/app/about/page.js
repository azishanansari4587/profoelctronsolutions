import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { stats } from '@/lib/data';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Profoelctron Solution</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Delivering innovative technology solutions that drive business growth
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="order-2 md:order-1">
                <img 
                  src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg" 
                  alt="TechConsult Office" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
                <div className="h-1 w-24 bg-tech-blue mb-6"></div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    At Profoelctron Solution, our mission is to empower businesses through innovative technology solutions that solve complex problems and drive sustainable growth. We combine technical expertise with strategic insight to help our clients navigate the rapidly evolving digital landscape.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    We envision a future where technology is seamlessly integrated into every business operation, enhancing efficiency, creativity, and human potential. We strive to be at the forefront of this transformation, leading the way in developing and implementing solutions that make this vision a reality for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Journey</h2>
            <div className="h-1 w-24 bg-tech-blue mb-10 mx-auto"></div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-tech-blue text-white rounded-full flex items-center justify-center text-xl font-bold">2013</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      TechConsult was founded by a group of technology enthusiasts with a shared vision of making advanced technology accessible to businesses of all sizes. Starting with just three consultants, we focused primarily on web development projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-tech-blue text-white rounded-full flex items-center justify-center text-xl font-bold">2016</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expansion</h3>
                    <p className="text-gray-600">
                      With a growing client base and an expanded team of 15 professionals, we broadened our service offerings to include cloud computing solutions and data analysis, addressing the evolving needs of our clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-tech-blue text-white rounded-full flex items-center justify-center text-xl font-bold">2019</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">
                      Our commitment to excellence was recognized with several industry awards for our innovative solutions. We established partnerships with leading technology providers, enhancing our ability to deliver cutting-edge services.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-tech-blue text-white rounded-full flex items-center justify-center text-xl font-bold">2023</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Today</h3>
                    <p className="text-gray-600">
                      Today, TechConsult is a leading technology consulting firm with over 50 experts across multiple disciplines. We continue to drive innovation, helping businesses transform and thrive in an increasingly digital world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Meet Our Leadership Team</h2>
            <div className="h-1 w-24 bg-tech-blue mb-10 mx-auto"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((member) => (
                <div key={member} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                  <div className="h-64 bg-gray-200">
                    {/* Replace with actual team member photos */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Team Member {member}</h3>
                    <p className="text-tech-blue font-medium mb-4">Position Title</p>
                    <p className="text-gray-600 mb-4">
                      Brief description about the team member, their expertise, and experience in the industry.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-tech-blue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with TechConsult for innovative solutions that drive your business forward. Let&apos;s build something amazing together.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-tech-blue hover:bg-tech-lightBlue text-white" asChild>
                <Link href={"/getStarted"}>Get Started</Link>
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10" asChild>
                <Link href={"/contact"}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;