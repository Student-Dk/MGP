import React, { useState } from 'react';
import { Phone, MapPin, Scissors, Menu, X, Home, Image, Users, Clock } from 'lucide-react';

const Header = () => {
  const phoneNumber = "+919876543210";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Google Maps link
  const locationUrl = "https://www.google.com/maps/place/Gandhi+Chowk/@28.6351584,77.0316837,20z/data=!4m9!1m2!2m1!1sMuskan+Plaler+Barber+Shop+Delhi!3m5!1s0x390d05001cacd745:0x49a8e997929f90fa!8m2!3d28.6351584!4d77.0321011!16s%2Fg%2F11x2vw2zyx?entry=ttu";

  // Function to handle phone call
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Function to open location
  const handleLocationClick = () => {
    window.open(locationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl sticky top-0 z-50">
      <div className="px-4 py-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
        
        {/* MAIN HEADER - Top Row */}
        <div className="flex justify-between items-center">
          
          {/* LEFT: Shop Name & Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full shadow-lg">
              <Scissors className="text-white" size={26} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-amber-400">M</span>uskan <span className="text-amber-400">G</span>ents <span className="text-amber-400">P</span>arlour
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <Clock size={12} className="text-amber-300" />
                <p className="text-xs text-gray-300">Open: Mon-Sat 9AM-8PM</p>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* DESKTOP LAYOUT - Right Side */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            
            {/* NAVIGATION LINKS - First Priority */}
            <nav className="flex gap-5">
              <a 
                href="#home" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Home size={18} className="group-hover:text-amber-400" />
                <span className="font-medium">Home</span>
              </a>
              <a 
                href="#services" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Scissors size={18} className="group-hover:text-amber-400" />
                <span className="font-medium">Services</span>
              </a>
              <a 
                href="#gallery" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Image size={18} className="group-hover:text-amber-400" />
                <span className="font-medium">Gallery</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Users size={18} className="group-hover:text-amber-400" />
                <span className="font-medium">Contact</span>
              </a>
            </nav>

            {/* VERTICAL DIVIDER */}
            <div className="h-8 w-px bg-gray-600"></div>

            {/* CONTACT INFO */}
            <div className="flex items-center gap-6">
              
              {/* LOCATION */}
              <div 
                onClick={handleLocationClick}
                className="flex items-center gap-3 cursor-pointer group"
                title="Open in Google Maps"
              >
                <div className="bg-blue-500/20 p-2 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <MapPin className="text-blue-300" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Location</p>
                  <p className="font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Gandhi Chowk
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 cursor-pointer group"
                title="Call Now"
              >
                <div className="bg-green-500/20 p-2 rounded-full group-hover:bg-green-500/30 transition-colors">
                  <Phone className="text-green-300" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Call Now</p>
                  <p className="font-bold text-sm group-hover:text-green-300 transition-colors">
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700 animate-slideDown">
            
            {/* MOBILE NAVIGATION */}
            <nav className="grid grid-cols-2 gap-3 mb-6">
              <a 
                href="#home" 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="text-amber-400 mb-2" size={24} />
                <span className="font-medium">Home</span>
              </a>
              <a 
                href="#services" 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Scissors className="text-amber-400 mb-2" size={24} />
                <span className="font-medium">Services</span>
              </a>
              <a 
                href="#gallery" 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image className="text-amber-400 mb-2" size={24} />
                <span className="font-medium">Gallery</span>
              </a>
              <a 
                href="#contact" 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="text-amber-400 mb-2" size={24} />
                <span className="font-medium">Contact</span>
              </a>
            </nav>

            {/* MOBILE CONTACT INFO */}
            <div className="space-y-4">
              
              {/* LOCATION CARD */}
              <div 
                onClick={handleLocationClick}
                className="flex items-center justify-between bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-4 rounded-xl border border-blue-700/30 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="text-sm text-gray-300">Gandhi Chowk, Delhi</p>
                  </div>
                </div>
                <span className="text-blue-300 text-sm">Map →</span>
              </div>

              {/* PHONE CARD */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center justify-between bg-gradient-to-r from-green-900/30 to-green-800/30 p-4 rounded-xl border border-green-700/30 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Call Now</p>
                    <p className="text-sm text-gray-300">{phoneNumber}</p>
                  </div>
                </div>
                <span className="text-green-300 text-sm">Call →</span>
              </div>
            </div>

            {/* TIMING INFO */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-center gap-2 text-amber-300">
                <Clock size={16} />
                <p className="text-sm">Timing: Mon-Sat 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;