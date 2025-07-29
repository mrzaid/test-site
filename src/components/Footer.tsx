
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NYC Cannabis Dispensary</h3>
            <p className="text-gray-300">
              Licensed cannabis dispensary delivery service providing premium products 
              with fast and discreet delivery throughout New York City.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-yellow-400">Terms & Conditions</a></li>
              <li><a href="/shipping-returns" className="hover:text-yellow-400">Shipping & Returns</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>📞 718-314-3173</p>
              <p>📧 info@nyccuratorsdeliverynearme.com</p>
              <p>🌐 www.nyccuratorsdeliverynearme.com</p>
              <p>⏰ Mon–Sun: 9 AM – 11 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 NYC Curators Delivery Near Me. All rights reserved.</p>
          <p className="text-sm mt-2">Must be 21+ to use this service. Please consume responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
