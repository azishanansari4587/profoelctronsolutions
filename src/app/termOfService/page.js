import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last Updated: May 13, 2025</p>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-gray">
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Profoelctron Solution website and services. Please read these Terms carefully before using our services.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
              <p>
                Profoelctron Solution provides technology consulting services, including but not limited to cloud computing, data analysis, cyber security, web development, custom software development, and database management. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. User Responsibilities</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>Use our services in any way that violates any applicable law or regulation</li>
                <li>Infringe on the intellectual property rights of others</li>
                <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                <li>Use our services to transmit any malware, spyware, or other harmful code</li>
                <li>Engage in any activity that interferes with or disrupts our services</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property Rights</h2>
              <p>
                Our services and their contents, including but not limited to text, graphics, logos, software, and code, are owned by Profoelctron Solution or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, modify, or distribute any content from our services without our express written consent.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Payment Terms</h2>
              <p>
                For paid services, you agree to pay all fees in accordance with the payment terms presented to you at the time of purchase. All payments are non-refundable unless otherwise stated. We reserve the right to change our prices at any time.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Confidentiality</h2>
              <p>
                We respect the confidentiality of information shared by our clients. We will not disclose confidential information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Profoelctron Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with our services or these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Profoelctron Solution, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">11. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out of or related to these Terms or our services shall be instituted exclusively in the federal or state courts located in San Francisco County, California.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                Profoelctron Solution<br />
                BTM Layout<br />
                Bengaluru, 560076<br />
                legal@profoelctronsolution.com<br />
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

export default TermsOfService;