import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PathwaySection = () => {
  const navigate = useNavigate();

  const manufacturers = [
    {
      id: 1,
      name: "Liebherr",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["LR 1300", "LR 1600", "LR 1750"],
      // partsCount: 2847
    },
    {
      id: 2,
      name: "Manitowoc",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["18000", "21000", "31000"],
      
    },
    {
      id: 3,
      name: "Terex",
      logo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["HC 275", "HC 340", "HC 450"],
      
    },
    {
      id: 4,
      name: "Kobelco",
      logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["CK1000G", "CK1200G", "CK1600G"],
      
    },
    {
      id: 5,
      name: "Sany",
      logo: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["SCC4000A", "SCC6500A", "SCC8500A"],
    
    },
    {
      id: 6,
      name: "XCMG",
      logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      models: ["XGC260", "XGC400", "XGC650"],
      
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Hydraulic Systems",
      icon: "Zap",
      description: "Pumps, cylinders, valves, and hydraulic components",
      // partsCount: 1247,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Track Systems",
      icon: "Move",
      description: "Track chains, sprockets, rollers, and undercarriage",
     // partsCount: 892,
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Boom & Jib",
      icon: "ArrowUp",
      description: "Boom sections, jib components, and structural parts",
      //partsCount: 634,
      color: "bg-orange-500"
    },
    {
      id: 4,
      name: "Engine & Powertrain",
      icon: "Settings",
      description: "Engine parts, transmission, and power components",
      // partsCount: 756,
      color: "bg-red-500"
    },
    {
      id: 5,
      name: "Electrical Systems",
      icon: "Zap",
      description: "Control modules, sensors, and electrical components",
      // partsCount: 423,
      color: "bg-purple-500"
    },
    {
      id: 6,
      name: "Cab & Operator",
      icon: "User",
      description: "Cab parts, seats, controls, and operator comfort",
      // partsCount: 318,
      color: "bg-indigo-500"
    }
  ];

  const handleManufacturerClick = (manufacturer) => {
    navigate('/product-catalog', { state: { manufacturer: manufacturer.name } });
  };

  const handleCategoryClick = (category) => {
    navigate('/product-catalog', { state: { category: category.name } });
  };

  const handleEmergencyClick = () => {
    navigate('/product-catalog', { state: { emergency: true } });
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Find Parts Your Way
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse by category to quickly find the parts you need. Click a category to explore all related parts.
          </p>
        </div>

        {/* 2 rows x 3 columns grid for categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 overflow-hidden group"
            >
              {/* Placeholder image */}
              <div className="w-full h-40 bg-slate-100 flex items-center justify-center">
                <img
                  src={`https://placehold.co/240x160?text=${encodeURIComponent(category.name)}`}
                  alt={category.name}
                  className="object-contain w-32 h-24 opacity-80 group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              {/* Card content */}
              <div className="flex-1 flex flex-col justify-between w-full px-6 py-4">
                <div className="flex items-center justify-center mb-2">
                  <div className={`w-10 h-10 ${category.color} rounded flex items-center justify-center mr-2`}>
                    <Icon name={category.icon} size={20} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-lg text-center">{category.name}</span>
                </div>
                <p className="text-slate-600 text-center text-sm mb-2 min-h-[40px]">{category.description}</p>
                {/* <p className="text-xs text-slate-400 text-center">{category.partsCount} parts</p> */}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaySection;