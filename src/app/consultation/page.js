'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service category.",
  }),
  date: z.date({
    required_error: "Please select a date for your consultation.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const serviceOptions = [
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "data-analysis", label: "Data Analysis" },
  { value: "cyber-security", label: "Cyber Security" },
  { value: "web-development", label: "Web Development" },
  { value: "custom-software", label: "Custom Software Development" },
  { value: "database-management", label: "Database Management" },
];

const timeSlots = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM"},
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
];

const ScheduleConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    service:"",
    date: "",
    time: "",
    message: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time || !formData.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: formData.date?.toISOString().split('T')[0]
        }),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company_name: '',
          service: '',
          date: null,
          time: '',
          message: ''
        });
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Submission failed");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Consultation</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Take the first step toward transforming your business with our expert technology solutions
            </p>
          </div>
        </section>
        
        {/* Consultation Booking Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <PhoneInput
                        id="phone"
                        country={'us'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{ width: '100%' }}
                        inputClass="rounded-md"
                        enableSearch
                      />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-medium mb-2">Company (Optional)</label>
                      <Input id="company_name" name="company_name" placeholder="Profoelctron Solution PVT LTD" value={formData.company_name} onChange={handleChange} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Service of Interest</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={handleDateChange}
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today || date > new Date(today.setMonth(today.getMonth() + 2));
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Time Slot</label>
                      <Select value={formData.time} onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot.value} value={slot.value}>{slot.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="h-32"
                      placeholder="Tell us about your project or requirements..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-lightBlue text-white py-3 text-lg">
                    Book Schedule Consultation
                  </Button>
                </form>
              </div>
              
              {/* Info Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h2>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <span className="bg-tech-blue/10 text-tech-blue font-bold text-xl h-10 w-10 rounded-full flex items-center justify-center mr-4">1</span>
                      <h3 className="text-xl font-semibold text-gray-800">Initial Discussion</h3>
                    </div>
                    <p className="text-gray-600">
                      We&apos;ll discuss your business needs, challenges, and goals to understand how our technology solutions can best serve you.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <span className="bg-tech-blue/10 text-tech-blue font-bold text-xl h-10 w-10 rounded-full flex items-center justify-center mr-4">2</span>
                      <h3 className="text-xl font-semibold text-gray-800">Solution Exploration</h3>
                    </div>
                    <p className="text-gray-600">
                      Our experts will recommend tailored technology solutions based on your specific requirements and industry best practices.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <span className="bg-tech-blue/10 text-tech-blue font-bold text-xl h-10 w-10 rounded-full flex items-center justify-center mr-4">3</span>
                      <h3 className="text-xl font-semibold text-gray-800">Proposal & Roadmap</h3>
                    </div>
                    <p className="text-gray-600">
                      You&apos;ll receive a comprehensive proposal outlining our recommended approach, timeline, and investment requirements.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-6 bg-tech-blue text-white rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Industry-leading technology expertise</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Customized solutions tailored to your business</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Proven track record of successful implementations</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ongoing support and maintenance services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScheduleConsultation;