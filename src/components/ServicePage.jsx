"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';
import ProjectShowcase from './ProjectShowcase';
import PartnerLogos from './PartnerLogos';
import { services, testimonials, projects, partners } from '@/lib/data';
import { LucideIcon, Cloud, Database, Shield, Globe, Code, ChartBar } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';



const ServicePage = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="mb-8 text-lg text-gray-600">The service you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-tech-blue hover:bg-tech-lightBlue">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const Icon = service.icon;
  const serviceTestimonials = testimonials[slug] || [];
  const serviceProjects = projects[slug] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className={cn("pt-32 pb-20", service.color)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Expert {service.title} services to transform your business and stay ahead of the competition.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-tech-blue hover:bg-tech-lightBlue" asChild>
                  <Link href={"/getStarted"}>Get Started</Link>
                </Button>
                <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white" asChild>
                  <Link href={`#${service.title}`}>Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className={cn("w-48 h-48 rounded-full flex items-center justify-center", service.color)}>
                <Icon className={cn("w-24 h-24", service.iconColor)} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id={service.title}className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our {service.title} Services
            </h2>
            <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Comprehensive solutions tailored to your specific needs and business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServiceFeatures(slug).map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className={cn("p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4", service.color)}>
                  <feature.icon className={cn("w-6 h-6", service.iconColor)} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Showcase Section */}
      <ProjectShowcase 
        projects={serviceProjects} 
        title={`Our ${service.title} Projects`}
        service={service.title.toLowerCase()}
      />
      
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Approach
            </h2>
            <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to deliver exceptional results for our {service.title.toLowerCase()} services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getApproachSteps(slug).map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-tech-blue text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials 
        testimonials={serviceTestimonials} 
        title={`${service.title} Client Testimonials`}
        service={service.title.toLowerCase()}
      />
      
      {/* Partners Section */}
      <PartnerLogos partners={partners} title="Our Trusted Technology Partners" />
      
      {/* CTA Section */}
      <section className="py-16 bg-tech-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our {service.title.toLowerCase()} experts help you achieve your business goals with tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100" asChild>
              <Link href={"/contact"}>Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-tech-blue" asChild>
              <Link href={"/consultation"}>Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Helper function to get service-specific features
function getServiceFeatures(slug) {
  // Import Lucide icons properly instead of using require
  
  const featuresMap = {
    'cloud-computing': [
      { icon: Cloud, title: "Cloud Migration", description: "Seamlessly migrate your existing infrastructure to the cloud with minimal disruption." },
      { icon: Cloud, title: "Cloud Optimization", description: "Optimize your cloud resources for cost, performance, and security." },
      { icon: Cloud, title: "Hybrid Cloud Solutions", description: "Create the perfect mix of public, private, and on-premises infrastructure." },
      { icon: Cloud, title: "Cloud Security", description: "Implement robust security measures to protect your cloud environment." },
      { icon: Cloud, title: "Managed Cloud Services", description: "24/7 monitoring and management of your cloud infrastructure." },
      { icon: Cloud, title: "Disaster Recovery", description: "Ensure business continuity with robust backup and recovery solutions." }
    ],
    'data-analysis': [
      { icon: ChartBar, title: "Business Intelligence", description: "Transform raw data into actionable insights with powerful BI tools." },
      { icon: ChartBar, title: "Predictive Analytics", description: "Forecast trends and behaviors to make proactive business decisions." },
      { icon: ChartBar, title: "Data Visualization", description: "Create intuitive dashboards and reports to communicate insights effectively." },
      { icon: ChartBar, title: "Big Data Processing", description: "Handle large volumes of data with advanced processing techniques." },
      { icon: ChartBar, title: "Machine Learning Models", description: "Develop custom ML models to solve specific business challenges." },
      { icon: ChartBar, title: "Data Integration", description: "Connect and unify data from multiple sources for comprehensive analysis." }
    ],
    'cyber-security': [
      { icon: Shield, title: "Security Assessment", description: "Identify vulnerabilities and threats in your current security posture." },
      { icon: Shield, title: "Threat Protection", description: "Implement advanced solutions to detect and prevent security threats." },
      { icon: Shield, title: "Compliance Management", description: "Ensure adherence to industry regulations and standards." },
      { icon: Shield, title: "Security Training", description: "Educate your team on best practices for maintaining security." },
      { icon: Shield, title: "Incident Response", description: "Rapid response and recovery from security breaches and incidents." },
      { icon: Shield, title: "Penetration Testing", description: "Simulate attacks to identify weaknesses before they can be exploited." }
    ],
    'web-development': [
      { icon: Globe, title: "Responsive Design", description: "Create websites that look and function perfectly on all devices." },
      { icon: Globe, title: "E-Commerce Solutions", description: "Build online stores with secure payment processing and inventory management." },
      { icon: Globe, title: "CMS Development", description: "Develop content management systems tailored to your specific needs." },
      { icon: Globe, title: "Web Application Development", description: "Create custom web applications with advanced functionality." },
      { icon: Globe, title: "UI/UX Design", description: "Design intuitive user interfaces that enhance user experience." },
      { icon: Globe, title: "Website Optimization", description: "Improve performance, SEO, and conversion rates of existing websites." }
    ],
    'custom-software': [
      { icon: Code, title: "Custom Application Development", description: "Build tailor-made software solutions for your unique business needs." },
      { icon: Code, title: "Legacy System Modernization", description: "Update and transform outdated systems into modern applications." },
      { icon: Code, title: "API Development & Integration", description: "Create and integrate APIs to connect your software with other systems." },
      { icon: Code, title: "Mobile App Development", description: "Develop native and cross-platform mobile applications." },
      { icon: Code, title: "Software Maintenance", description: "Ensure your software remains current, secure, and optimized." },
      { icon: Code, title: "DevOps Implementation", description: "Streamline development and operations with automated processes." }
    ],
    'database-management': [
      { icon: Database, title: "Database Design", description: "Create efficient, scalable database architectures tailored to your needs." },
      { icon: Database, title: "Performance Optimization", description: "Tune and optimize databases for maximum speed and efficiency." },
      { icon: Database, title: "Data Migration", description: "Securely move your data to new systems with minimal disruption." },
      { icon: Database, title: "Database Maintenance", description: "Regular health checks and proactive maintenance to prevent issues." },
      { icon: Database, title: "Database Security", description: "Implement robust security measures to protect your valuable data." },
      { icon: Database, title: "Backup & Recovery", description: "Ensure data integrity with comprehensive backup and recovery solutions." }
    ]
  };
  
  return featuresMap[slug] || [];
}

// Helper function to get service-specific approach steps
function getApproachSteps(slug) {
  const commonSteps = [
    { title: "Discovery & Analysis", description: "We begin by thoroughly understanding your business needs, goals, and challenges through comprehensive consultation and analysis." },
    { title: "Strategic Planning", description: "Based on our findings, we develop a tailored strategy that aligns with your business objectives and technical requirements." },
    { title: "Implementation", description: "Our expert team executes the plan with precision, using industry best practices and cutting-edge technologies." },
    { title: "Testing & Quality Assurance", description: "Rigorous testing ensures that all solutions meet our high standards for performance, security, and reliability." }
  ];
  
  const additionalSteps = {
    'cloud-computing': [
      { title: "Migration & Deployment", description: "Carefully orchestrated migration to the cloud with minimal disruption to your business operations." },
      { title: "Optimization & Monitoring", description: "Continuous monitoring and optimization of your cloud environment to ensure optimal performance and cost-efficiency." }
    ],
    'data-analysis': [
      { title: "Data Collection & Preparation", description: "Gathering and cleaning data from various sources to ensure accuracy and completeness." },
      { title: "Analysis & Insight Generation", description: "Applying advanced analytical techniques to extract meaningful insights from your data." }
    ],
    'cyber-security': [
      { title: "Risk Assessment", description: "Identifying potential security risks and vulnerabilities within your systems and networks." },
      { title: "Security Implementation", description: "Deploying comprehensive security measures tailored to your specific risk profile." }
    ],
    'web-development': [
      { title: "Design & Prototyping", description: "Creating intuitive user interfaces and interactive prototypes based on user experience best practices." },
      { title: "Development & Deployment", description: "Building and launching your website using modern technologies and methodologies." }
    ],
    'custom-software': [
      { title: "Requirement Analysis", description: "Detailed examination of functional and non-functional requirements for your software solution." },
      { title: "Iterative Development", description: "Agile development process with regular feedback and refinement to ensure the solution meets your needs." }
    ],
    'database-management': [
      { title: "Database Architecture Design", description: "Creating optimized database structures based on your specific data requirements." },
      { title: "Implementation & Migration", description: "Setting up new database systems or migrating existing data with minimal disruption." }
    ]
  };
  
  return [...commonSteps, ...(additionalSteps[slug] || [])];
}

export default ServicePage;
