import React from 'react';
import { Phone, MapPin, Clock, Scissors, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "+919876543210";
  
  // Phone call function
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Location URL (same as header)
  const locationUrl = "https://www.google.com/maps/place/Gandhi+Chowk/@28.6351584,77.0316837,20z/data=!4m9!1m2!2m1!1sMuskan+Plaler+Barber+Shop+Delhi!3m5!1s0x390d05001cacd745:0x49a8e997929f90fa!8m2!3d28.6351584!4d77.0321011!16s%2Fg%2F11x2vw2zyx?entry=ttu";

  const handleLocationClick = () => {
    window.open(locationUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@muskangentsparlour.com";
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-full">
                <Scissors className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Muskan Gents Parlour</h2>
                <p className="text-gray-400 text-sm">Premium Barber Shop</p>
              </div>
            </div>
            
            <p className="text-gray-400">
              Delhi's trusted grooming destination since 2010. 
              Experience traditional barbering with modern techniques.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@muskangentsparlour.com"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Haircut & Styling</li>
              <li className="text-gray-400">Shave & Beard Grooming</li>
              <li className="text-gray-400">Facial & Skincare</li>
              <li className="text-gray-400">Head Massage</li>
              <li className="text-gray-400">Hair Color</li>
              <li className="text-gray-400">Quick Grooming Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Contact Us</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div 
                onClick={handlePhoneCall}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Phone className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-semibold group-hover:text-green-400 transition-colors">
                    {phoneNumber}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div 
                onClick={handleLocationClick}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="font-semibold group-hover:text-blue-400 transition-colors">
                    Gandhi Chowk, Delhi
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Click for directions</p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/20 p-2 rounded-full">
                  <Clock className="text-amber-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Opening Hours</p>
                  <p className="font-semibold">Mon-Sat: 9AM - 8PM</p>
                  <p className="text-sm text-gray-500">Sun: 10AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <button 
              onClick={handlePhoneCall}
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Muskan Gents Parlour. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;