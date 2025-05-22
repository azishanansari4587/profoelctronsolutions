"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const Contact = () => {

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              We're here to help you transform your business with innovative technology solutions
            </p>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
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
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us directly using the information below. Our team is ready to assist you with any questions about our services.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-4 rounded-full mr-6">
                      <MapPin className="w-7 h-7 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                      <p className="text-gray-600">
                        BTM Layout, Main 9th A<br />
                        Bengaluru, Karnataka 560076<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-4 rounded-full mr-6">
                      <Mail className="w-7 h-7 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        info@profoelctronsolution.com<br />
                        support@profoelctronsolution.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-4 rounded-full mr-6">
                      <Phone className="w-7 h-7 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                      <p className="text-gray-600">
                         (+91) 990-003-7589<br />
                        {/* +1 (555) 987-6543 */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with actual map implementation */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31110.604560967637!2d77.605354!3d12.91893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b27badbb99%3A0xc27efc0554ce6e61!2sProfonet%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1746986905986!5m2!1sen!2sin" width="600" height="450" className="border-0; w-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/* <p className="text-gray-500 text-lg font-medium">Interactive Map Would Be Here</p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;