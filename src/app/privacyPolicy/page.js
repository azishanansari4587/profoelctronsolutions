import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: May 13, 2025</p>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-gray">
              <p>
                At Profoelctron Solution, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>Register for an account</li>
                <li>Express interest in obtaining information about us or our products and services</li>
                <li>Participate in activities on our website</li>
                <li>Contact us</li>
              </ul>
              
              <p className="mt-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>Name, email address, phone number, and company name</li>
                <li>Billing information if you purchase our services</li>
                <li>Information you provide in communications with us</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our website. This information may include:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>Device and connection information such as IP address, browser type, and operating system</li>
                <li>Usage data such as pages visited, time spent on pages, and click paths</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>Providing, operating, and maintaining our website and services</li>
                <li>Improving and personalizing your experience</li>
                <li>Understanding how you interact with our website</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you about our services, updates, and other information</li>
                <li>Processing transactions and sending related information</li>
                <li>Preventing fraudulent transactions, monitoring against theft, and protecting against criminal activity</li>
                <li>Responding to your inquiries and support requests</li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure of Your Information</h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required to comply with applicable laws, governmental requests, or legal process.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>The right to access information we have about you</li>
                <li>The right to request correction of your personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@techconsult.com.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee that your information will not be accessed, disclosed, altered, or destroyed.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions or comments about this privacy policy, you may contact us at:
              </p>
              <p className="mt-2">
                Profoelctron Solution<br />
                BTM Layout<br />
                Bengaluru, 560076<br />
                privacy@profoelctronsolution.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
