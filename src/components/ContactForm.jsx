"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
  
    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch("/api/contact/", {
          method: "POST",
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        if(res.ok) {
          toast.success(data.message);
          setFormData({ name: "", email: "", subject: "", message: ""});
        } else {
          toast.error(data.mesage);
        }
      } catch (error) {
        toast.error(error.message || "Something went wrong...");
      }
    };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="h-1 w-24 bg-tech-blue mb-6"></div>
            <p className="text-gray-600 mb-8">
              Ready to transform your business with innovative technology solutions? Contact us today to schedule a consultation with our experts.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">BTM Layout, Main 9th A<br />Bengaluru, 560076</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">contact@profoelctronsolution.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-tech-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(+91) 990-003-7589</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                  </div>
                                  <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <Input id="email" type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                  <Input id="subject" name="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required />
                                </div>
                                
                                <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                  <Textarea 
                                    id="message" 
                                    name="message"
                                    placeholder="Tell us about your project or inquiry..."
                                    value={formData.message}
                                    onChange= {handleChange}
                                    rows={5}
                                    required
                                  />
                                </div>
                                
                                <Button 
                                  type="submit"
                                  className="w-full bg-tech-blue hover:bg-tech-lightBlue text-white py-3 text-lg"
                                >
                                  Send Message
                                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
