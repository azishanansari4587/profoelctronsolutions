import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-br from-tech-blue/10 to-tech-blue/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-gray-600">Last Updated: May 13, 2025</p>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-gray">
              <p>
                This Cookie Policy explains how Profoelctron Solution uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mt-4">
                Cookies set by the website owner (in this case, Profoelctron Solution) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Why do we use cookies?</h2>
              <p>
                We use cookies for several reasons:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions such as page navigation and access to secure areas of the website.</li>
                <li><strong>Functionality cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, more personal features.</li>
                <li><strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Types of cookies we use</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Essential cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
              </p>
              <table className="min-w-full border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Provider</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">sessionid</td>
                    <td className="border border-gray-200 px-4 py-2">techconsult.com</td>
                    <td className="border border-gray-200 px-4 py-2">Used to maintain session state</td>
                    <td className="border border-gray-200 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">csrftoken</td>
                    <td className="border border-gray-200 px-4 py-2">techconsult.com</td>
                    <td className="border border-gray-200 px-4 py-2">Helps prevent Cross-Site Request Forgery attacks</td>
                    <td className="border border-gray-200 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Analytics cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              </p>
              <table className="min-w-full border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Provider</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">_ga</td>
                    <td className="border border-gray-200 px-4 py-2">Google</td>
                    <td className="border border-gray-200 px-4 py-2">Registers a unique ID that is used to generate statistical data</td>
                    <td className="border border-gray-200 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">_gid</td>
                    <td className="border border-gray-200 px-4 py-2">Google</td>
                    <td className="border border-gray-200 px-4 py-2">Registers a unique ID for tracking visitors</td>
                    <td className="border border-gray-200 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">_gat</td>
                    <td className="border border-gray-200 px-4 py-2">Google</td>
                    <td className="border border-gray-200 px-4 py-2">Used to throttle request rate</td>
                    <td className="border border-gray-200 px-4 py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How to manage cookies</h2>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">How to opt-out of specific cookies</h3>
              <p>
                Most modern browsers allow you to control your cookie settings for all websites that you browse. You can manage cookie preferences through your browser settings:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 mt-4">
                <li><a href="#" className="text-tech-blue hover:underline">Google Chrome</a></li>
                <li><a href="#" className="text-tech-blue hover:underline">Mozilla Firefox</a></li>
                <li><a href="#" className="text-tech-blue hover:underline">Safari</a></li>
                <li><a href="#" className="text-tech-blue hover:underline">Microsoft Edge</a></li>
                <li><a href="#" className="text-tech-blue hover:underline">Internet Explorer</a></li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to this Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="mt-4">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicy;