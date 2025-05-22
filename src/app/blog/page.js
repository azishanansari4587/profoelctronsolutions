"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useState } from 'react';
import { toast } from 'react-toastify';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt: "Explore emerging trends in cloud computing and how they're reshaping business infrastructure.",
    image: "/placeholder.svg",
    category: "Cloud Computing",
    date: "May 5, 2025",
    author: "John Smith"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Teams",
    excerpt: "Learn how to protect your business data with a distributed workforce.",
    image: "/placeholder.svg",
    category: "Cyber Security",
    date: "May 1, 2025",
    author: "Emily Johnson"
  },
  {
    id: 3,
    title: "Leveraging Big Data for Business Intelligence",
    excerpt: "How modern data analysis techniques can drive strategic business decisions.",
    image: "/placeholder.svg",
    category: "Data Analysis",
    date: "April 28, 2025",
    author: "Michael Wang"
  },
  {
    id: 4,
    title: "Web Development Trends for 2025",
    excerpt: "Stay ahead with the latest technologies and methodologies in web development.",
    image: "/placeholder.svg",
    category: "Web Development",
    date: "April 22, 2025",
    author: "Sarah Martinez"
  },
  {
    id: 5,
    title: "Custom Software vs. Off-the-Shelf: Making the Right Choice",
    excerpt: "A comprehensive guide to determining which software solution is right for your business.",
    image: "/placeholder.svg",
    category: "Custom Software",
    date: "April 15, 2025",
    author: "David Kim"
  },
  {
    id: 6,
    title: "The Evolution of Database Management Systems",
    excerpt: "From traditional databases to modern solutions: Understanding the landscape.",
    image: "/placeholder.svg",
    category: "Database Management",
    date: "April 10, 2025",
    author: "Lisa Chen"
  }
];

// Blog categories
const categories = [
  "All Posts",
  "Cloud Computing",
  "Cyber Security",
  "Data Analysis",
  "Web Development",
  "Custom Software",
  "Database Management"
];

const Blog = () => {

  const [email, setEmail] = useState('');
      // const [showSuccess, setShowSuccess] = useState(false);
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const res = await fetch('api/subscriber', {
                  method: "POST",
                  body: JSON.stringify({ email }),
                  headers: {
                      'Content-Type': 'application/json',
                  }
              });
      
              const data = await res.json();
              // setMessage(data.message || data.error);
              // setShowSuccess(true);
              setEmail('');
  
              toast.success(data.message);
          } catch (error) {
              toast.error(error.message);
          }
  
      }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Profoelctron Solution Blog</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Insights, news, and expert advice on technology trends and solutions
            </p>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Search Bar */}
                <div className="relative mb-10">
                  <Input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="pr-12"
                  />
                  <Button 
                    className="absolute right-1 top-1 h-8 w-10 px-3" 
                    variant="ghost"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </Button>
                </div>
                
                {/* Featured Post */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-10">
                  <div className="h-64 bg-gray-200">
                    {/* Replace with actual featured image */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-tech-blue/10 text-tech-blue text-sm font-medium px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">{blogPosts[0].date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">By {blogPosts[0].author}</span>
                      <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.slice(1).map((post) => (
                    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                      <div className="h-48 bg-gray-200">
                        {/* Replace with actual blog images */}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-tech-blue/10 text-tech-blue text-xs font-medium px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs ml-3">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">By {post.author}</span>
                          <Button variant="ghost" className="text-tech-blue hover:text-tech-lightBlue p-0">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className={`block py-2 px-3 rounded-md transition ${
                            index === 0 
                              ? 'bg-tech-blue text-white' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-start">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800 hover:text-tech-blue leading-tight">
                            <a href="#">{post.title}</a>
                          </h4>
                          <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Subscription */}
                <div className="bg-tech-blue text-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4 text-white/90">
                    Stay updated with the latest insights and news from our experts.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 border-white/40 placeholder:text-white/70 text-white"
                    />
                    <Button className="w-full bg-white text-tech-blue hover:bg-gray-100">
                      Subscribe
                    </Button>
                  </form>
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

export default Blog;
