import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';


const FeaturedProducts = () => {
  const navigate = useNavigate();
  

  // Static featured products data (first 3 from products.js, with images)
  const SAMPLE_IMAGES = {
    hydraulic: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=800&fit=crop"
    ]
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Hydraulic Main Pump Assembly",
      partNumber: "HMP-LR1300-A1",
      manufacturer: "Liebherr",
      model: "LR 1300",
      price: "$12,450",
      category: "Hydraulic System",
      rating: 4.8,
      reviews: 23,
      features: ["OEM Quality", "Direct Replacement", "Tested & Certified"],
      specifications: {
        "Flow Rate": "280 L/min",
        "Pressure": "350 bar",
        "Weight": "145 kg",
        "Warranty": "12 months"
      },
      compatibility: ["LR 1300", "LR 1350", "LR 1400"],
      images: {
        main: SAMPLE_IMAGES.hydraulic[0],
        gallery: [
          {
            url: SAMPLE_IMAGES.hydraulic[0],
            alt: "Main view of hydraulic pump",
            caption: "Complete assembly view"
          },
          {
            url: SAMPLE_IMAGES.hydraulic[1],
            alt: "Side view showing connections",
            caption: "Connection points and ports"
          },
          {
            url: SAMPLE_IMAGES.hydraulic[2],
            alt: "Internal components",
            caption: "Internal mechanism detail"
          }
        ]
      }
    },
    {
      id: 2,
      name: "High Flow Control Valve",
      partNumber: "HCV-LR1300-V1",
      manufacturer: "Liebherr",
      model: "LR 1300",
      price: "$4,850",
      category: "Hydraulic System",
      stockCount: 12,
      rating: 4.7,
      reviews: 18,
      features: ["Precise Control", "High Flow Capacity", "Pressure Compensated"],
      specifications: {
        "Flow Rate": "350 L/min",
        "Max Pressure": "400 bar",
        "Weight": "28 kg",
        "Warranty": "12 months"
      },
      compatibility: ["LR 1300", "LR 1350", "LR 1400"],
      images: {
        main: SAMPLE_IMAGES.hydraulic[1],
        gallery: [
          {
            url: SAMPLE_IMAGES.hydraulic[1],
            alt: "Control valve front view",
            caption: "Main control valve assembly"
          },
          {
            url: SAMPLE_IMAGES.hydraulic[2],
            alt: "Valve internals",
            caption: "Internal components"
          }
        ]
      }
    },
    {
      id: 3,
      name: "Track Chain Assembly Kit",
      partNumber: "TCA-MAN18K-B2",
      manufacturer: "Manitowoc",
      model: "18000",
      price: "$8,750",
      category: "Undercarriage",
      stockCount: 15,
      rating: 4.9,
      reviews: 41,
      features: ["Heavy Duty", "Corrosion Resistant", "Extended Life"],
      specifications: {
        "Length": "3.2 m",
        "Pitch": "280 mm",
        "Material": "Hardened Steel",
        "Warranty": "18 months"
      },
      compatibility: ["18000", "21000", "16000"]
      // No images for this one (as in your sample)
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Critical Components
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            High-demand parts with complete technical specifications and compatibility information. 
            Professional-grade components for mission-critical applications.
          </p>
        </div>

        {/* Products Grid */}
        {featuredProducts.length === 0 ? (
          <div className="text-center text-slate-500 py-12">No featured products found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => {
              // Use only data from constants/data/products.js
              let mainImage = product.images?.main;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48">
                      <Image
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="p-4">
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="font-bold text-slate-900 mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600">Part #: {product.partNumber}</p>
                      <p className="text-sm text-slate-500">{product.manufacturer}</p>
                      <p className="text-sm text-slate-500">Category: {product.category}</p>
                    </div>
                    {/* Key Specifications */}
                    {/* <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Specs:</h4>
                      <div className="space-y-1">
                        {product.specifications ? Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-slate-600">{key}:</span>
                            <span className="text-slate-900 font-medium">{value}</span>
                          </div>
                        )) : <span className="text-slate-400">N/A</span>}
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/product-catalog')}
            className="bg-white px-8"
          >
            View All Parts Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;