import React from 'react';
import { Scissors, Clock, Star } from 'lucide-react';

const Hero = () => {
  const phoneNumber = "+919142635439";
  
  // Single function for all phone calls
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Shop Name Highlight */}
            <div className="mb-2">
              <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
                Welcome to
              </h2>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
                Muskan Gents Parlour
              </h1>
              <div className="h-1 w-24 bg-amber-500 mt-3"></div>
            </div>
            
            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-gray-800 font-medium">
              Professional Grooming &<br />
              <span className="text-amber-600">Hair Styling Services</span>
            </p>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Experience premium barber services with expert stylists. 
              We provide traditional and modern grooming solutions for today's gentleman.
            </p>
            
            {/* Simple Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Scissors className="text-amber-500" size={18} />
                <span>Expert Barbers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="text-amber-500" size={18} />
                <span>Quick Service</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Star className="text-amber-500" size={18} />
                <span>Quality Guaranteed</span>
              </div>
            </div>
            
            {/* Single Call Button */}
            <div className="pt-8">
              <button 
                onClick={handlePhoneCall}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Call Now: {phoneNumber}
              </button>
              
              {/* Simple Timing Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Walk-ins Welcome</p>
                    <p className="text-gray-800 font-medium">No Appointment Needed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Open Today</p>
                    <p className="text-gray-800 font-medium">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Replace with your image */}
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-gray-100 flex flex-col items-center justify-center p-8">
                <div className="w-48 h-48 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Scissors className="text-amber-600" size={64} />
                </div>
                <p className="text-center text-gray-600">
                 
                </p>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  (You can add multiple images)
                </p>
              </div>
              
              {/* Simple Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <div className="text-white">
                  <p className="text-xl font-semibold">Serving Since 2010</p>
                  <p className="text-sm opacity-90">Delhi's Trusted Barber Shop</p>
                </div>
              </div>
            </div>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-2xl font-bold text-amber-700">10+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-800">5K+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-2xl font-bold text-amber-700">50+</p>
                <p className="text-sm text-gray-600">Services</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple Scroll Indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Scroll to explore services</p>
          <div className="inline-block mt-2">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full">
              <div className="w-1 h-3 bg-amber-500 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;