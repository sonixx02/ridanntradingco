import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const navigate = useNavigate();

  const mockSuggestions = [
    { id: 1, text: "Hydraulic Pump - Liebherr LR 1300", type: "part", partNumber: "LP-1300-HP" },
    { id: 2, text: "Track Chain Assembly", type: "part", partNumber: "TCA-2500" },
    { id: 3, text: "Boom Cylinder Seal Kit", type: "part", partNumber: "BCSK-400" },
    { id: 4, text: "Liebherr LR 1300", type: "model", manufacturer: "Liebherr" },
    { id: 5, text: "Manitowoc 18000", type: "model", manufacturer: "Manitowoc" }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 2) {
      const filtered = mockSuggestions.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/product-catalog', { state: { searchQuery } });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.text);
    setSearchSuggestions([]);
    navigate('/product-catalog', { state: { searchQuery: suggestion.text } });
  };

  const handleEmergencyOrder = () => {
    navigate('/product-catalog', { state: { emergency: true } });
  };

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Crawler crane in operation at construction site"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Keeping Your Equipment
            <span className="block text-orange-500">Running</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Professional-grade crawler crane parts with technical precision. 
            Find exactly what you need with our smart search and compatibility tools.
          </p>

          {/* Smart Search Bar */}
          <div className="relative mb-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by part number, crane model, or description..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 pl-14 pr-20 text-lg bg-white rounded-xl border-2 border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 shadow-lg"
                />
                <Icon 
                  name="Search" 
                  size={24} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-900 px-6"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 z-50 max-h-80 overflow-y-auto">
                {searchSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-6 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-b-0 transition-colors duration-150"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={suggestion.type === 'part' ? 'Package' : 'Truck'} 
                        size={18} 
                        className="text-slate-400"
                      />
                      <div>
                        <p className="font-medium text-slate-900">{suggestion.text}</p>
                        {suggestion.partNumber && (
                          <p className="text-sm text-slate-500">Part #: {suggestion.partNumber}</p>
                        )}
                        {suggestion.manufacturer && (
                          <p className="text-sm text-slate-500">{suggestion.manufacturer}</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Search"
              iconPosition="left"
              onClick={() => navigate('/product-catalog')}
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 text-lg"
            >
              Browse All Parts
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={handleEmergencyOrder}
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
            >
              Emergency Order
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-300">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-green-400" />
              <span className="font-medium">99.2% On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-blue-400" />
              <span className="font-medium">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={20} className="text-orange-400" />
              <span className="font-medium">24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;