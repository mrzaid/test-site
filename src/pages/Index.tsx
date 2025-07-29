
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Leaf, MapPin, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/d8122e7d-5365-49b2-b17b-539da71d37d1.png" 
              alt="NYC Cannabis Dispensary Delivery Service" 
              className="mx-auto mb-8 max-w-md w-full h-auto"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              NYC Cannabis Dispensary Delivery Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Fast, Reliable & Discreet Premium Cannabis Delivery
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Premium cannabis products delivered straight to your door in New York City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:718-314-3173">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3">
                  Call to Order: 718-314-3173
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NYC Curators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold mb-2">Licensed & Verified</h3>
              <p className="text-gray-600">Fully licensed dispensary with all required permits</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Fast delivery throughout all NYC boroughs</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Discreet & Secure</h3>
              <p className="text-gray-600">Professional packaging and secure delivery</p>
            </Card>
            <Card className="p-6 text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Lab-tested cannabis products from trusted sources</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-xl mb-2">Browse Products</h3>
              <p className="text-gray-600">Select your favorite strains and cannabis items from our premium selection</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-xl mb-2">Place Your Order</h3>
              <p className="text-gray-600">Call us directly at 718-314-3173 to place your order with our friendly staff</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-xl mb-2">Fast NYC Delivery</h3>
              <p className="text-gray-600">Get your products delivered discreetly and quickly to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Deliver Throughout NYC</h2>
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <p className="text-lg text-gray-600">We deliver to all 5 boroughs of New York City</p>
            <p className="text-gray-600">Call 718-314-3173 for availability in your neighborhood</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold">Manhattan</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold">Brooklyn</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold">Queens</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold">Bronx</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold">Staten Island</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Best cannabis delivery service in NYC! Fast, professional, and high-quality products every time."</p>
              <p className="font-bold">- Sarah M.</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Reliable delivery and excellent customer service. The team is knowledgeable and helpful."</p>
              <p className="font-bold">- Mike D.</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Discreet packaging and quick delivery. Great selection of premium cannabis products."</p>
              <p className="font-bold">- Jessica L.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Order?</h2>
          <p className="text-xl mb-8">Call us now for fast, discreet delivery throughout NYC</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:718-314-3173">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl px-8 py-3">
                📞 718-314-3173
              </Button>
            </a>
            <div className="text-lg">
              <p>📧 info@nyccuratorsdeliverynearme.com</p>
              <p>⏰ Mon–Sun: 9 AM – 11 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
