
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Users, Leaf, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About NYC Curators</h1>
            <p className="text-xl text-gray-600">
              New York City's trusted cannabis delivery service, committed to quality, safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  NYC Curators Delivery Near Me is a licensed cannabis dispensary delivery service, 
                  dedicated to providing high-quality, lab-tested cannabis products with fast and 
                  discreet delivery throughout New York City.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded with a mission to make premium cannabis accessible to all New Yorkers, 
                  we've built our reputation on reliability, quality, and exceptional customer service. 
                  Our team of cannabis experts carefully curates each product in our inventory.
                </p>
                <p className="text-gray-600">
                  We understand the importance of discretion and professionalism in cannabis delivery, 
                  which is why we've designed our service to be as convenient and private as possible 
                  for our valued customers.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/d8122e7d-5365-49b2-b17b-539da71d37d1.png" 
                  alt="NYC Cannabis Dispensary" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">Licensed & Legal</h3>
                <p className="text-gray-600">Fully licensed and compliant with NYC cannabis regulations</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Lab-tested products from trusted, verified suppliers</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Knowledgeable staff to help with product selection</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">Trusted Service</h3>
                <p className="text-gray-600">Thousands of satisfied customers across NYC</p>
              </Card>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 text-center">
                To provide New York City with safe, reliable, and discreet access to premium cannabis products 
                while maintaining the highest standards of customer service and legal compliance. We believe 
                in the therapeutic and recreational benefits of cannabis and are committed to helping our 
                customers find the right products for their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
