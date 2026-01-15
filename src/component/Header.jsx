import React, { useState } from 'react';
import { Phone, MapPin, Scissors, Menu, X } from 'lucide-react';

const Header = () => {
  const phoneNumber = "+919876543210"; // Aapka actual number
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  // Function to handle phone call
  const handlePhoneClick = () => {
    // Direct call functionality
    window.location.href = `tel:${phoneNumber}`;
  };

  // Function to copy number to clipboard
  const copyToClipboard = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-4 md:px-8 max-w-7xl mx-auto">
        {/* Main Header Container */}
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full">
              <Scissors className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="text-yellow-600">M</span>uskan <span className="text-yellow-600">P</span>laler
              </h1>
              <p className="text-sm text-gray-600">Premium Barber Shop</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation & Contact */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Contact Information Card */}
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-6">
                
                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="text-yellow-500" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Visit Us</p>
                    <p className="font-semibold text-sm">Delhi, India</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                {/* Phone Number with Call Button */}
                <div className="relative">
                  <div 
                    onClick={handlePhoneClick}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className="bg-green-100 p-2 rounded-full">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Call Now</p>
                      <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {phoneNumber}
                      </p>
                    </div>
                  </div>
                  
                  {/* Copy Button */}
                  <button
                    onClick={copyToClipboard}
                    className="absolute -top-1 -right-1 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                  >
                    Copy
                  </button>
                  
                  {/* Copy Success Message */}
                  {copySuccess && (
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                      ✓ {copySuccess}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex gap-6">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 bg-white border-t pt-6">
            {/* Mobile Contact Card */}
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6">
              
              {/* Location */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                <MapPin className="text-yellow-500" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Our Location</p>
                  <p className="font-semibold">Delhi, India</p>
                </div>
              </div>

              {/* Phone Number with Call Button */}
              <div className="relative">
                <div 
                  onClick={handlePhoneClick}
                  className="flex items-center justify-between bg-green-50 p-4 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="text-green-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Tap to Call</p>
                      <p className="font-bold text-xl text-gray-900">{phoneNumber}</p>
                    </div>
                  </div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full">
                    Call Now
                  </div>
                </div>
                
                {/* Copy Button for Mobile */}
                <button
                  onClick={copyToClipboard}
                  className="mt-3 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Copy Number</span>
                  {copySuccess && <span className="text-green-600">✓ {copySuccess}</span>}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              <a 
                href="#home" 
                className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;