import React from 'react';
import { Scissors, Razor, Sparkles, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Scissors className="text-amber-600" size={28} />,
      title: "Haircut & Styling",
      description: "Professional haircuts, fades, trims and modern hairstyling for all hair types.",
      price: "₹150 - ₹500",
      duration: "30-45 min",
      popular: true
    },
    {
      id: 2,
      icon: <Razor className="text-amber-600" size={28} />,
      title: "Shave & Beard Grooming",
      description: "Traditional hot towel shave, beard shaping, trimming and conditioning.",
      price: "₹200 - ₹400",
      duration: "25-40 min",
      popular: true
    },
    {
      id: 3,
      icon: <Sparkles className="text-amber-600" size={28} />,
      title: "Facial & Skincare",
      description: "Men's facial, blackhead removal, skin polishing and moisturizing treatments.",
      price: "₹300 - ₹800",
      duration: "45-60 min"
    },
    {
      id: 4,
      icon: <Shield className="text-amber-600" size={28} />,
      title: "Head Massage",
      description: "Relaxing oil massage for stress relief, better blood circulation and hair growth.",
      price: "₹200 - ₹350",
      duration: "20-30 min"
    },
    {
      id: 5,
      icon: <Award className="text-amber-600" size={28} />,
      title: "Hair Color",
      description: "Professional hair coloring, highlights, and gray coverage with premium products.",
      price: "₹400 - ₹1500",
      duration: "60-90 min"
    },
    {
      id: 6,
      icon: <Clock className="text-amber-600" size={28} />,
      title: "Quick Services",
      description: "Mustache trim, nose wax, eyebrow shaping, and other quick grooming services.",
      price: "₹50 - ₹200",
      duration: "10-15 min"
    }
  ];

  const phoneNumber = "+919876543210";
  
  // Phone call function
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
            Our Services
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Barber Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium grooming services with expert barbers using quality products
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  {service.icon}
                </div>
                {service.popular && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
                <button 
                  onClick={handlePhoneCall}
                  className="text-amber-600 hover:text-amber-700 font-semibold text-sm hover:underline"
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready for a Fresh Look?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Walk-ins welcome! No appointment needed. Visit us today for professional grooming services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePhoneCall}
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: {phoneNumber}
            </button>
            
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="font-semibold">Open Hours</p>
              <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-sm opacity-90">Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
              <Shield size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Hygiene First</h4>
            <p className="text-gray-600 text-sm">Sterilized tools & single-use products</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Award size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expert Barbers</h4>
            <p className="text-gray-600 text-sm">10+ years experience each</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
              <Clock size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quick Service</h4>
            <p className="text-gray-600 text-sm">No long waiting times</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;