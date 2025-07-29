
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy and personal information are important to us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul>
              <li>Place an order by phone or through our website</li>
              <li>Contact us for customer service</li>
              <li>Sign up for our communications</li>
              <li>Provide feedback or reviews</li>
            </ul>

            <h2>Personal Information</h2>
            <p>The types of personal information we may collect include:</p>
            <ul>
              <li>Name and contact information (phone number, email address)</li>
              <li>Delivery address</li>
              <li>Age verification and identification information (as required by law)</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and deliver your orders</li>
              <li>Provide customer service and support</li>
              <li>Verify your age and comply with legal requirements</li>
              <li>Send you updates about your orders</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your personal information in the following circumstances:</p>
            <ul>
              <li>With delivery personnel to fulfill your orders</li>
              <li>With payment processors to handle transactions</li>
              <li>When required by law or to comply with legal processes</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Age Verification</h2>
            <p>
              As required by law, we verify that all customers are 21 years of age or older. 
              We collect and store age verification information as required by cannabis regulations.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services 
              and comply with legal obligations, including cannabis industry record-keeping requirements.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We may use cookies and similar technologies to improve your experience on our website 
              and analyze usage patterns.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul className="list-none">
              <li>Phone: 718-314-3173</li>
              <li>Email: info@nyccuratorsdeliverynearme.com</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the updated policy on our website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
