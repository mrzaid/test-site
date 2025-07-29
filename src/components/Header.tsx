
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d8122e7d-5365-49b2-b17b-539da71d37d1.png" 
              alt="NYC Cannabis Dispensary Delivery Service" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-700 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-green-700 font-medium">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</a>
            <a href="/delivery-areas" className="text-gray-700 hover:text-green-700 font-medium">Delivery Areas</a>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:block">
            <a href="tel:718-314-3173">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Phone className="w-4 h-4 mr-2" />
                718-314-3173
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
              <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
              <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
              <a href="/delivery-areas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Delivery Areas</a>
              <div className="px-4 py-2">
                <a href="tel:718-314-3173">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Phone className="w-4 h-4 mr-2" />
                    718-314-3173
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
