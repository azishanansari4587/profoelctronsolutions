import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const GetStarted = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "We start by understanding your business needs and goals through an initial consultation."
    },
    {
      id: 2,
      title: "Needs Assessment",
      description: "Our experts conduct a thorough analysis of your current systems and requirements."
    },
    {
      id: 3,
      title: "Solution Design",
      description: "We create a tailored solution proposal that addresses your specific challenges."
    },
    {
      id: 4,
      title: "Implementation",
      description: "Our team brings the solution to life with careful planning and execution."
    },
    {
      id: 5,
      title: "Training & Support",
      description: "We ensure your team is fully equipped to maximize the benefits of your new solution."
    }
  ];

  const faqs = [
    {
      question: "How long does the consultation process typically take?",
      answer: "The initial consultation typically takes 1-2 weeks, depending on the complexity of your business and requirements. During this time, we conduct thorough assessments and prepare customized recommendations."
    },
    {
      question: "What information do I need to prepare before our first meeting?",
      answer: "It's helpful to have an overview of your current technology infrastructure, key business challenges, goals you want to achieve, and any budget considerations. This allows us to make the most of our initial discussions."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide comprehensive support options ranging from basic maintenance to full managed services. We'll work with you to determine the right level of support for your needs and budget."
    },
    {
      question: "How do you ensure the security of our data during the project?",
      answer: "Security is our top priority. We implement industry-standard security protocols, sign comprehensive NDAs, follow data protection regulations, and can customize security measures based on your specific requirements."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely. Our team has experience working with a wide range of technologies. We assess your current systems and either integrate with them or recommend upgrades where beneficial."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with Profoelctron Solution</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Begin your digital transformation journey with our expert team
            </p>
            <div className="mt-8">
              <Button className="bg-white text-tech-blue hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <Link href={"/consultation"}>Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Process</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We've developed a streamlined approach to ensure your project is completed efficiently and effectively.
            </p>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-tech-blue/20 transform -translate-x-1/2"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="my-4 md:my-0 z-10">
                      <div className="w-12 h-12 rounded-full bg-tech-blue text-white flex items-center justify-center text-xl font-bold">
                        {step.id}
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Why Work With Us</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Partnering with TechConsult gives you access to industry-leading expertise and a commitment to your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Expert Team", description: "Our consultants bring years of experience across diverse technologies and industries." },
                { title: "Custom Solutions", description: "We design solutions tailored specifically to your business needs and goals." },
                { title: "Ongoing Support", description: "We provide comprehensive support to ensure your continued success." },
                { title: "Transparent Process", description: "Clear communication and visibility throughout your entire project." },
                { title: "Proven Results", description: "A track record of delivering successful outcomes for our clients." },
                { title: "Innovation Focus", description: "We stay at the cutting edge of technology to provide forward-thinking solutions." },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4 text-tech-blue">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-tech-blue mb-10 mx-auto"></div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and take the first step towards technology solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-tech-blue hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <Link href={"/consultation"}>Schedule a Consultation</Link>
              </Button>
              <Button variant="outline" className="border-white text-black hover:text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <Link href={`/${"#service"}`}>View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;