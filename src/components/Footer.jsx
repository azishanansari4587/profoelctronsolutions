import React from 'react';
import Link from 'next/link';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-tech-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Profoelctron Solution
            </Link>
            <p className="text-gray-300 mb-6">
              Providing innovative technology solutions to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-tech-blue/20 hover:bg-tech-blue/30 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.16c-.406.062-1.035.44-1.224.506a4.68 4.68 0 001.383-2.126.75.75 0 00-1.102-.84 9.35 9.35 0 01-2.57 1.065c-.659-.66-1.547-1.012-2.457-1.012-1.966 0-3.56 1.657-3.56 3.687 0 .28.03.553.09.82a10.25 10.25 0 01-7.23-3.82.75.75 0 00-1.248.22c-.226.713-.345 1.467-.345 2.234 0 1.122.39 2.145 1.026 2.94a3.35 3.35 0 01-.635-.336.75.75 0 00-1.152.64c0 1.752.92 3.214 2.227 3.997-.157-.026-.315-.04-.475-.04a.75.75 0 00-.748.867c.345 1.86 1.72 3.284 3.37 3.554-.633.298-1.332.465-2.065.465-.21 0-.42-.013-.627-.038a.75.75 0 00-.657 1.18c1.507 1.802 3.755 2.822 6.115 2.822 7.333 0 11.306-6.004 11.306-11.387 0-.18-.003-.345-.01-.515a8.18 8.18 0 001.932-2.073.75.75 0 00-.928-1.14z"></path>
                </svg>
              </Link>
              <Link href="#" className="bg-tech-blue/20 hover:bg-tech-blue/30 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.84 9.49.5.09.68-.22.68-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.608.07-.608 1.003.07 1.532 1.03 1.532 1.03.893 1.53 2.34 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.748-1.025 2.748-1.025.55 1.376.206 2.394.1 2.646.64.7 1.03 1.592 1.03 2.682 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </Link>
              <Link href="#" className="bg-tech-blue/20 hover:bg-tech-blue/30 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.046 6.286a2.57 2.57 0 00-1.8-1.834C18.576 4 12 4 12 4s-6.576 0-8.246.452a2.57 2.57 0 00-1.8 1.834C1.5 8.01 1.5 11.46 1.5 11.46s0 3.45.454 5.174a2.57 2.57 0 001.8 1.834C5.424 19 12 19 12 19s6.576 0 8.246-.452a2.57 2.57 0 001.8-1.834C22.5 14.91 22.5 11.46 22.5 11.46s0-3.45-.454-5.174zM9.75 14.738V8.182l5.5 3.278-5.5 3.278z"></path>
                </svg>
              </Link>
              <Link href="#" className="bg-tech-blue/20 hover:bg-tech-blue/30 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.001zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href={"/services/cloud-computing"} className="text-gray-300 hover:text-white transition-colors">Cloud Computing</Link></li>
              <li><Link href={"/services/data-analysis"} className="text-gray-300 hover:text-white transition-colors">Data Analysis</Link></li>
              <li><Link href={"/services/cyber-security"} className="text-gray-300 hover:text-white transition-colors">Cyber Security</Link></li>
              <li><Link href={"/services/web-development"} className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href={"/services/custom-software"} className="text-gray-300 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href={"/services/database-management"} className="text-gray-300 hover:text-white transition-colors">Database Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href={"/about"} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={"/caseStudies"} className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href={"/blog"} className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href={"/careers"} className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href={"/contact"} className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <Newsletter/>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Profoelctron Solution. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href={"/privacyPolicy"} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href={"/termOfService"} className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href={"/cookiePolicy"} className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link href={"https://zishan-dev.vercel.app/"} target='_blank' className="text-white transition-colors bg-teal-500 rounded-lg px-2 mx-2 hover:bg-gradient-to-r from-blue-400 to-purple-500">Zishan Dev</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
