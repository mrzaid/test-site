
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Truck, Clock, Shield, RefreshCw } from "lucide-react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Delivery & Returns</h1>
            <p className="text-xl text-gray-600">
              Fast, reliable delivery with clear policies for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-lg mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Available throughout all NYC boroughs</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="font-bold text-lg mb-2">Fast Service</h3>
              <p className="text-gray-600">30-90 minute delivery windows</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">Secure Delivery</h3>
              <p className="text-gray-600">Discreet packaging and professional service</p>
            </Card>
            <Card className="p-6 text-center">
              <RefreshCw className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Exchange policy for defective products</p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Delivery Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Service Areas</h3>
                    <p className="text-gray-600 mb-2">We deliver to all five NYC boroughs:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Manhattan: 30-60 minutes</li>
                      <li>• Brooklyn: 45-75 minutes</li>
                      <li>• Queens: 45-90 minutes</li>
                      <li>• Bronx: 60-90 minutes</li>
                      <li>• Staten Island: 60-90 minutes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Delivery Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 11:00 PM<br />
                      Last orders accepted 30 minutes before closing
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Ordering Process</h3>
                    <ol className="text-gray-600 space-y-1">
                      <li>1. Call 718-314-3173 to place your order</li>
                      <li>2. Provide delivery address and ID for verification</li>
                      <li>3. Receive estimated delivery time</li>
                      <li>4. Driver will call upon arrival</li>
                      <li>5. Present valid ID and make payment</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Age Verification</h3>
                    <p className="text-gray-600">
                      Valid government-issued photo ID required for all deliveries. 
                      Must be 21 years or older. No exceptions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Payment & Pricing</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Accepted Payment Methods</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Cash (exact change preferred)</li>
                      <li>• Major credit cards (Visa, MasterCard)</li>
                      <li>• Debit cards</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Delivery Fees</h3>
                    <p className="text-gray-600">
                      Delivery fees vary by location and order size. 
                      Call for current rates and minimum order requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Pricing</h3>
                    <p className="text-gray-600">
                      All prices include applicable taxes. Prices are subject to change. 
                      Current pricing available by phone.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Tips</h3>
                    <p className="text-gray-600">
                      Gratuity is appreciated but not required. Standard tipping 
                      guidelines apply (15-20%).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-red-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Returns & Exchange Policy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">❌ No Returns Policy</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• All sales are final</li>
                    <li>• No returns for change of mind</li>
                    <li>• No returns for products you don't like</li>
                    <li>• No returns for incorrect orders (verify before accepting)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4">✅ Exchange Policy</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Defective products may be exchanged</li>
                    <li>• Must report within 24 hours of delivery</li>
                    <li>• Products must be unused and in original packaging</li>
                    <li>• Photo evidence may be required</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <h3 className="font-bold text-lg mb-4">How to Report Issues</h3>
                <p className="text-gray-700 mb-4">
                  If you receive a defective product, contact us immediately:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>📞 Call: 718-314-3173</li>
                  <li>📧 Email: info@nyccuratorsdeliverynearme.com</li>
                  <li>🕐 Report within 24 hours of delivery</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About Delivery or Returns?</h2>
              <p className="text-lg text-gray-600 mb-6">Our customer service team is here to help</p>
              <a href="tel:718-314-3173" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                📞 Call 718-314-3173
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
