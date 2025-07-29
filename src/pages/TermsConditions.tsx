
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By using NYC Curators Delivery Near Me services, you agree to be bound by these 
              Terms and Conditions and all applicable laws and regulations.
            </p>

            <h2>Age Requirement</h2>
            <p>
              You must be at least 21 years of age to use our services. By placing an order, 
              you confirm that you meet this age requirement and will provide valid identification 
              upon delivery.
            </p>

            <h2>Service Description</h2>
            <p>
              NYC Curators Delivery Near Me is a licensed cannabis delivery service operating 
              in New York City. We deliver cannabis products to customers within our service areas.
            </p>

            <h2>Ordering and Payment</h2>
            <ul>
              <li>All orders must be placed by phone at 718-314-3173</li>
              <li>Payment is required at the time of delivery</li>
              <li>We accept cash and major credit cards</li>
              <li>Prices are subject to change without notice</li>
              <li>All sales are final unless products are defective</li>
            </ul>

            <h2>Delivery Terms</h2>
            <ul>
              <li>Delivery is available within our designated service areas</li>
              <li>Delivery times are estimates and may vary due to traffic or other factors</li>
              <li>A valid government-issued ID must be presented upon delivery</li>
              <li>Delivery personnel may refuse delivery if the customer appears intoxicated</li>
              <li>Minimum order amounts may apply</li>
            </ul>

            <h2>Product Information</h2>
            <ul>
              <li>All products are lab-tested and comply with NYC cannabis regulations</li>
              <li>Product effects may vary by individual</li>
              <li>We are not responsible for adverse reactions to products</li>
              <li>Customers are responsible for understanding local laws regarding possession</li>
            </ul>

            <h2>Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Resell or redistribute products purchased from us</li>
              <li>Use our services if you are under 21 years of age</li>
              <li>Provide false information during the ordering process</li>
              <li>Use products in public places where prohibited by law</li>
              <li>Drive or operate machinery under the influence of cannabis</li>
            </ul>

            <h2>Privacy and Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding customer information and orders. 
              See our Privacy Policy for detailed information about data handling.
            </p>

            <h2>Returns and Refunds</h2>
            <ul>
              <li>All sales are final</li>
              <li>Defective products may be exchanged within 24 hours of delivery</li>
              <li>Products must be unused and in original packaging for exchanges</li>
              <li>Refunds are only provided for billing errors or undelivered orders</li>
            </ul>

            <h2>Legal Compliance</h2>
            <p>
              Our services operate under New York State cannabis laws. Customers are responsible 
              for understanding and complying with all applicable local, state, and federal laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              NYC Curators Delivery Near Me shall not be liable for any indirect, incidental, 
              special, or consequential damages arising from the use of our services or products.
            </p>

            <h2>Medical Disclaimer</h2>
            <p>
              Our products are not intended to diagnose, treat, cure, or prevent any disease. 
              Consult with a healthcare provider before using cannabis products, especially 
              if you have medical conditions or take medications.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on our website.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these terms, contact us at:</p>
            <ul className="list-none">
              <li>Phone: 718-314-3173</li>
              <li>Email: info@nyccuratorsdeliverynearme.com</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
