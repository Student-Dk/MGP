import React from 'react';
import { Phone, MapPin, Clock, Scissors } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "+919876543210";
  
  // Phone call function
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Location URL
  const locationUrl = "https://www.google.com/maps/place/Gandhi+Chowk/@28.6351584,77.0316837,20z/data=!4m9!1m2!2m1!1sMuskan+Plaler+Barber+Shop+Delhi!3m5!1s0x390d05001cacd745:0x49a8e997929f90fa!8m2!3d28.6351584!4d77.0321011!16s%2Fg%2F11x2vw2zyx?entry=ttu";

  const handleLocationClick = () => {
    window.open(locationUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Top Section - Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Phone Card */}
          <div 
            onClick={handlePhoneCall}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-bold">{phoneNumber}</p>
                <p className="text-xs text-gray-500 mt-1">Tap to call directly</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div 
            onClick={handleLocationClick}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Our Location</p>
                <p className="font-bold">Gandhi Chowk, Delhi</p>
                <p className="text-xs text-gray-500 mt-1">Tap to open map</p>
              </div>
            </div>
          </div>

          {/* Timing Card */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-amber-600 p-2 rounded-full">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Opening Hours</p>
                <p className="font-bold">Mon-Sat: 9AM-8PM</p>
                <p className="text-xs text-gray-500">Sun: 10AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Shop Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="bg-amber-600 p-2 rounded-full">
                <Scissors size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Muskan Gents Parlour</h2>
                <p className="text-gray-400 text-sm">Professional Barber Shop</p>
              </div>
            </div>

            {/* Call Button */}
            <button 
              onClick={handlePhoneCall}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Book Appointment
            </button>
          </div>

          {/* Simple Description */}
          <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
            Delhi's trusted grooming destination since 2010. Experience premium barber services.
          </p>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Muskan Gents Parlour. All rights reserved.
            </p>
            
            <div className="flex gap-4 text-sm">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;