
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Ready to order? Have questions? We're here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6 flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a href="tel:718-314-3173" className="text-green-600 text-xl font-bold hover:underline">
                      718-314-3173
                    </a>
                    <p className="text-gray-600">Call for immediate orders and questions</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:info@nyccuratorsdeliverynearme.com" className="text-green-600 hover:underline">
                      info@nyccuratorsdeliverynearme.com
                    </a>
                    <p className="text-gray-600">For general inquiries and support</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">Service Area</h3>
                    <p className="text-gray-700">All 5 NYC Boroughs</p>
                    <p className="text-gray-600">Manhattan, Brooklyn, Queens, Bronx, Staten Island</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-center space-x-4">
                  <Clock className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-gray-700">Monday - Sunday: 9:00 AM - 11:00 PM</p>
                    <p className="text-gray-600">Same-day delivery available</p>
                  </div>
                </Card>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">🚨 Age Verification Required</h3>
                <p className="text-gray-700">
                  You must be 21 or older to purchase cannabis products. Valid ID required for all deliveries.
                </p>
              </div>
            </div>

            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your inquiry or order..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
