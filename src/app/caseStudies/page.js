import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    client: "Global Financial Services Company",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800",
    summary: "Helped a Fortune 500 financial services company migrate their legacy infrastructure to a secure cloud environment.",
    results: [
      "Reduced operational costs by 35%",
      "Improved system reliability with 99.99% uptime",
      "Decreased time-to-market for new features by 60%"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Overhaul",
    client: "Healthcare Provider Network",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800",
    summary: "Implemented comprehensive security measures for a healthcare network handling sensitive patient data.",
    results: [
      "Achieved HIPAA compliance across all systems",
      "Reduced security incidents by 87%",
      "Implemented zero-trust architecture"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Platform Redesign",
    client: "Retail Chain",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800",
    summary: "Redesigned and rebuilt an outdated e-commerce platform to improve user experience and increase conversion rates.",
    results: [
      "Increased conversion rate by 28%",
      "Reduced cart abandonment by 42%",
      "Improved page load speed by 67%"
    ]
  },
  {
    id: 4,
    title: "Business Intelligence Dashboard",
    client: "Manufacturing Leader",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800",
    summary: "Developed custom BI dashboards to provide real-time insights into manufacturing operations and supply chain.",
    results: [
      "Reduced inventory costs by 22%",
      "Improved production efficiency by 18%",
      "Enabled data-driven decision making across departments"
    ]
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore how we&apos;ve helped organizations across industries solve complex challenges and achieve their business goals.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-3">
              <Button variant="secondary">All Industries</Button>
              <Button variant="outline">Cloud Computing</Button>
              <Button variant="outline">Cyber Security</Button>
              <Button variant="outline">Data Analysis</Button>
              <Button variant="outline">Custom Software</Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Featured Case Study</Badge>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Customer Service Transformation</h2>
              <p className="text-gray-700 mb-6">
                We helped a global telecommunications company implement an AI-powered customer service solution that dramatically improved customer satisfaction while reducing operational costs.
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">The Challenge</h3>
                <p className="text-gray-700">
                  The client was struggling with long wait times, inconsistent service quality, and rising costs in their customer support centers handling over 2 million inquiries monthly.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Our Solution</h3>
                <p className="text-gray-700">
                  We developed a custom AI solution that combined natural language processing, machine learning, and a user-friendly interface to handle routine inquiries and provide agents with real-time assistance for complex issues.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-tech-blue/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-tech-blue">65%</p>
                  <p className="text-sm text-gray-600">Reduction in Average Resolution Time</p>
                </div>
                <div className="bg-tech-blue/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-tech-blue">42%</p>
                  <p className="text-sm text-gray-600">Decrease in Operational Costs</p>
                </div>
                <div className="bg-tech-blue/5 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-tech-blue">89%</p>
                  <p className="text-sm text-gray-600">Customer Satisfaction Rate</p>
                </div>
              </div>
              
              {/* <Button>Read Full Case Study</Button> */}
            </div>
            
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&w=800"
                alt="AI Customer Service Dashboard"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">More Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <Card key={study.id} className="border border-gray-200 overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{study.category}</Badge>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription>{study.client}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{study.summary}</p>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-700">• {result}</li>
                    ))}
                  </ul>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="w-full">Read Case Study</Button>
                </CardFooter> */}
              </Card>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Button size="lg" variant="default">View All Case Studies</Button>
          </div> */}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-tech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our technology solutions can help you solve your business challenges and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary"><Link href={"/consultation"}>Schedule a Consultation</Link></Button>
            <Button variant="outline" className="border-white text-black hover:text-white hover:bg-white/10" asChild>
              <Link href={"/contact"}>Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
