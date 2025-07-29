
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Truck } from "lucide-react";

const DeliveryAreas = () => {
  const boroughs = [
    {
      name: "Manhattan",
      areas: ["Upper East Side", "Upper West Side", "Midtown", "Lower East Side", "SoHo", "Tribeca", "Chelsea", "Greenwich Village"],
      deliveryTime: "30-60 minutes"
    },
    {
      name: "Brooklyn",
      areas: ["Williamsburg", "Park Slope", "DUMBO", "Brooklyn Heights", "Bed-Stuy", "Crown Heights", "Bushwick", "Fort Greene"],
      deliveryTime: "45-75 minutes"
    },
    {
      name: "Queens",
      areas: ["Long Island City", "Astoria", "Flushing", "Forest Hills", "Jackson Heights", "Elmhurst", "Sunnyside"],
      deliveryTime: "45-90 minutes"
    },
    {
      name: "Bronx",
      areas: ["South Bronx", "Bronx Park", "Fordham", "Riverdale", "Concourse", "Morris Park"],
      deliveryTime: "60-90 minutes"
    },
    {
      name: "Staten Island",
      areas: ["St. George", "Stapleton", "New Brighton", "Tottenville", "Great Kills"],
      deliveryTime: "60-90 minutes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">NYC Delivery Areas</h1>
            <p className="text-xl text-gray-600">
              We proudly serve all five boroughs of New York City with fast, reliable cannabis delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete NYC Coverage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No matter where you are in New York City, we'll deliver premium cannabis products 
              right to your door. Our delivery network covers all five boroughs with professional, 
              discreet service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {boroughs.map((borough, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold">{borough.name}</h3>
                </div>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Delivery: {borough.deliveryTime}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Popular Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {borough.areas.slice(0, 4).map((area, areaIndex) => (
                      <span key={areaIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                    {borough.areas.length > 4 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{borough.areas.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <a href="tel:718-314-3173">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Order Now
                  </Button>
                </a>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg mb-12">
            <div className="flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold">Delivery Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-bold text-lg mb-2">Minimum Order</h3>
                <p className="text-gray-700">Call for current minimum order requirements</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Delivery Fee</h3>
                <p className="text-gray-700">Varies by location - call for details</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Payment Methods</h3>
                <p className="text-gray-700">Cash on delivery, major credit cards accepted</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See Your Area?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're constantly expanding our delivery zones. Call us to check if we deliver to your specific location.
            </p>
            <a href="tel:718-314-3173">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                📞 Call 718-314-3173
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeliveryAreas;
