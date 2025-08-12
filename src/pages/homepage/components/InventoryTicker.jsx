import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const InventoryTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const inventoryData = [
    {
      id: 1,
      partName: "Hydraulic Pump Assembly",
      partNumber: "HP-LR1300-001",
      manufacturer: "Liebherr",
      model: "LR 1300",
      stockLevel: 12,
      status: "In Stock",
      lastUpdated: "2 mins ago"
    },
    {
      id: 2,
      partName: "Track Chain Link",
      partNumber: "TCL-MAN-18000",
      manufacturer: "Manitowoc",
      model: "18000",
      stockLevel: 45,
      status: "In Stock",
      lastUpdated: "5 mins ago"
    },
    {
      id: 3,
      partName: "Boom Cylinder Seal Kit",
      partNumber: "BCSK-TRX-275",
      manufacturer: "Terex",
      model: "HC 275",
      stockLevel: 8,
      status: "Low Stock",
      lastUpdated: "1 min ago"
    },
    {
      id: 4,
      partName: "Engine Control Module",
      partNumber: "ECM-KOB-1000",
      manufacturer: "Kobelco",
      model: "CK1000G",
      stockLevel: 23,
      status: "In Stock",
      lastUpdated: "3 mins ago"
    },
    {
      id: 5,
      partName: "Swing Motor Assembly",
      partNumber: "SMA-SAN-4000",
      manufacturer: "Sany",
      model: "SCC4000A",
      stockLevel: 6,
      status: "Low Stock",
      lastUpdated: "4 mins ago"
    },
    {
      id: 6,
      partName: "Cab Door Handle",
      partNumber: "CDH-XCM-260",
      manufacturer: "XCMG",
      model: "XGC260",
      stockLevel: 34,
      status: "In Stock",
      lastUpdated: "6 mins ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === inventoryData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [inventoryData.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'text-green-600 bg-green-100';
      case 'Low Stock':
        return 'text-amber-600 bg-amber-100';
      case 'Out of Stock':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const currentItem = inventoryData[currentIndex];

  return (
    <section className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Real-Time Inventory</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Live Updates</span>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-4 text-sm text-slate-400">
              <span>Updated every 30 seconds</span>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>Last sync: {currentItem.lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Ticker Content */}
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              {/* Part Information */}
              <div className="space-y-1">
                <p className="text-white font-semibold">{currentItem.partName}</p>
                <p className="text-slate-400 text-sm">Part #: {currentItem.partNumber}</p>
                <p className="text-slate-400 text-sm">{currentItem.manufacturer} {currentItem.model}</p>
              </div>

              {/* Stock Level */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Package" size={20} className="text-blue-400" />
                  <span className="text-white font-semibold text-lg">{currentItem.stockLevel}</span>
                  <span className="text-slate-400">units</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentItem.status)}`}>
                  {currentItem.status}
                </span>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-end space-x-2">
                <div className="flex space-x-1">
                  {inventoryData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-blue-500' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400 text-sm ml-2">
                  {currentIndex + 1}/{inventoryData.length}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <p className="text-2xl font-bold text-green-400">2,847</p>
              <p className="text-sm text-slate-400">Parts In Stock</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <p className="text-2xl font-bold text-blue-400">99.2%</p>
              <p className="text-sm text-slate-400">Availability Rate</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <p className="text-2xl font-bold text-orange-400">24/7</p>
              <p className="text-sm text-slate-400">Order Processing</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <p className="text-2xl font-bold text-purple-400">156</p>
              <p className="text-sm text-slate-400">Manufacturers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryTicker;