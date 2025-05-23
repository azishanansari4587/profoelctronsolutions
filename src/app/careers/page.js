import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const careersData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "Remote, US",
    type: "Full-time",
    description: "We're looking for an experienced Frontend Developer to join our team and help create exceptional user experiences for our clients.",
    requirements: [
      "5+ years of experience with React, Vue, or Angular",
      "Strong TypeScript and JavaScript skills",
      "Experience with modern CSS frameworks",
      "Passion for UI/UX design principles",
      "Experience with performance optimization"
    ]
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our backend team to develop scalable and resilient systems that power our clients' digital transformation.",
    requirements: [
      "3+ years experience with Node.js, Python, or Java",
      "Knowledge of database design and management",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Understanding of microservices architecture",
      "Experience with API design and development"
    ]
  },
  {
    id: 3,
    title: "DevOps Specialist",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Help us build and maintain our infrastructure and deployment pipelines to ensure reliable and efficient delivery of our solutions.",
    requirements: [
      "Experience with containerization (Docker, Kubernetes)",
      "Knowledge of CI/CD pipelines",
      "Cloud infrastructure experience",
      "Monitoring and logging expertise",
      "Security best practices knowledge"
    ]
  },
  {
    id: 4,
    title: "UX Designer",
    location: "Remote, US",
    type: "Full-time",
    description: "Create user-centered designs for our clients' digital products and services, ensuring exceptional user experiences.",
    requirements: [
      "3+ years of UX design experience",
      "Proficiency in design tools (Figma, Adobe XD)",
      "User research and testing skills",
      "Ability to create wireframes, prototypes, and user flows",
      "Knowledge of accessibility standards"
    ]
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section className="bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re looking for talented individuals who are passionate about technology and innovation.
              Join us in creating cutting-edge solutions for our clients.
            </p>
            <Button size="lg">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* Why join us section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Work With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-tech-blue/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl  font-bold mb-3">Innovative Projects</h3>
              <p className="text-gray-600">
                Work on cutting-edge technologies and challenging projects for industry-leading clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-blue/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl  font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                We invest in your growth with professional development opportunities, training, and mentorship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-blue/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl  font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a diverse team of professionals who support each other and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open positions section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careersData.map(job => (
              <Card key={job.id} className="border border-gray-200 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <span className="inline-flex items-center mr-3 text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="inline-flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">{job.description}</p>
                  <h4 className="font-medium text-sm uppercase text-gray-500 mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-tech-blue mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-tech-blue hover:bg-tech-lightBlue">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-tech-blue/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from the quality of our code to the solutions we deliver to our clients.
              </p>
            </div>
            
            <div className="bg-tech-blue/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-700">
                We believe that the best results come from open communication, shared knowledge, and teamwork.
              </p>
            </div>
            
            <div className="bg-tech-blue/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We&apos;re constantly exploring new technologies and approaches to solve complex problems in creative ways.
              </p>
            </div>
            
            <div className="bg-tech-blue/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Client Success</h3>
              <p className="text-gray-700">
                Everything we do is focused on delivering value and helping our clients achieve their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;