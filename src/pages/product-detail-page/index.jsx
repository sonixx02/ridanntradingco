import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';
import { products } from '../../data/products';

import ProductImageGallery from './components/ProductImageGallery';
import ProductSpecifications from './components/ProductSpecifications';
import CompatibilitySection from './components/CompatibilitySection';
import InstallationResources from './components/InstallationResources';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';
import OrderingSection from './components/OrderingSection';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Combine all products from both data sources
  const allProducts = products;

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [id, allProducts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <Icon name="Loader" size={32} className="animate-spin text-blue-800" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
            <p className="text-slate-600 mb-6">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/product-catalog')}
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6)
    .map(p => ({
      id: p.id,
      name: p.name,
      partNumber: p.partNumber,
      description: p.name,
      price: p.price || parseFloat(p.price?.replace('$', '').replace(',', '')) || 0,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
      // rating: p.rating || 4.5,
      // reviews: p.reviews || p.reviewCount || 10,
      // inStock: p.inStock !== false && p.availability !== 'backorder'
    }));

  const images = [
    {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
      alt: `${product.name} main view`,
      labels: ["Main Assembly", "Side View"]
    },
    {
      url: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=800&fit=crop",
      alt: `${product.name} detail view`,
      labels: ["Internal Components", "Detail View"]
    },
    {
      url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=800&fit=crop",
      alt: `${product.name} installation context`,
      labels: ["Installation Context", "Usage"]
    }
  ];

  const specifications = {
    dimensions: {
      title: "Dimensions & Weight",
      icon: "Ruler",
      specs: [
        { label: "Overall Length", value: product.specifications?.["Length"] || "450mm" },
        { label: "Weight", value: product.specifications?.["Weight"] || "2.5 kg" },
        { label: "Material", value: product.specifications?.["Material"] || "High-strength steel" },
        { label: "Warranty", value: product.specifications?.["Warranty"] || "12 months" }
      ],
      notes: [
        "Dimensions include fully assembled position",
        "Weight excludes mounting hardware"
      ]
    },
    performance: {
      title: "Performance Specifications",
      icon: "Gauge",
      specs: [
        { label: "Flow Rate", value: product.specifications?.["Flow Rate"] || "280 L/min" },
        { label: "Pressure", value: product.specifications?.["Pressure"] || "350 bar" },
        { label: "Operating Temperature", value: "-40°F to 200°F" },
        { label: "Service Life", value: "1,000,000+ cycles" }
      ],
      notes: [
        "Performance tested at maximum working conditions",
        "Service life based on standard operating conditions"
      ]
    }
  };

  const compatibleModels = product.compatibility?.map(model => ({
    manufacturer: product.manufacturer,
    model: model,
    series: model.split(' ')[0] + " Series",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop",
    verified: true
  })) || [];

  const crossReferences = [
    {
      manufacturer: product.manufacturer,
      partNumber: product.partNumber,
      oem: true,
      superseded: false
    }
  ];

  const installationResources = {
    guides: [
      {
        title: "Installation Guide",
        description: "Complete step-by-step installation procedures",
        size: "2.4 MB",
        updated: "Dec 2024"
      }
    ],
    videos: [
      {
        title: "Installation Video",
        description: "Professional installation demonstration",
        thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=225&fit=crop",
        duration: "18:45",
        views: "12,450",
        added: "2 weeks ago"
      }
    ],
    safety: [
      {
        title: "Safety Requirements",
        points: [
          "Follow all manufacturer safety guidelines",
          "Use appropriate personal protective equipment",
          "Ensure proper training before installation"
        ]
      }
    ],
    tools: [
      {
        name: "Torque Wrench",
        specification: "500 Nm capacity, calibrated"
      },
      {
        name: "Socket Set",
        specification: "Metric, 19mm-32mm"
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Mike Rodriguez",
      rating: 5,
      title: "Excellent Quality",
      content: "High-quality part that fits perfectly. Professional installation recommended.",
      date: "2 weeks ago",
      verified: true,
      helpful: 12,
      craneModel: product.compatibility?.[0] || "Various Models",
      technicalDetails: {
        installation: "Straightforward",
        durability: "Excellent",
        fit: "Perfect"
      }
    }
  ];

  const bundles = [
    {
      id: "bundle-1",
      name: "Complete Maintenance Kit",
      description: "Essential parts for comprehensive maintenance",
      items: [
        { name: product.name, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=50&h=50&fit=crop" },
        { name: "Seal Kit", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=50&h=50&fit=crop" },
        { name: "Filter Kit", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=50&h=50&fit=crop" }
      ],
      originalPrice: (typeof product.price === 'string' ? parseFloat(product.price.replace('$', '').replace(',', '')) : product.price) + 200,
      bundlePrice: (typeof product.price === 'string' ? parseFloat(product.price.replace('$', '').replace(',', '')) : product.price) + 150,
      savings: 50
    }
  ];

  const pricing = {
    breaks: [
      { minQty: 1, price: typeof product.price === 'string' ? parseFloat(product.price.replace('$', '').replace(',', '')) : product.price, savings: null },
      { minQty: 2, price: (typeof product.price === 'string' ? parseFloat(product.price.replace('$', '').replace(',', '')) : product.price) * 0.95, savings: 5 },
      { minQty: 5, price: (typeof product.price === 'string' ? parseFloat(product.price.replace('$', '').replace(',', '')) : product.price) * 0.9, savings: 10 }
    ]
  };

  const deliveryOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      description: "Regular ground shipping",
      timeframe: "5-7 business days",
      cost: 0
    },
    {
      id: "expedited",
      name: "Expedited Shipping",
      description: "Faster delivery via air freight",
      timeframe: "2-3 business days",
      cost: 45.00
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    // { id: 'specifications', label: 'Specifications', icon: 'Settings' },
    // { id: 'compatibility', label: 'Compatibility', icon: 'CheckCircle' },
    // { id: 'installation', label: 'Installation', icon: 'BookOpen' },
    // { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 overflow-x-auto">
          <button onClick={() => navigate('/homepage')} className="hover:text-blue-800 whitespace-nowrap">Home</button>
          <Icon name="ChevronRight" size={16} />
          <button onClick={() => navigate('/product-catalog')} className="hover:text-blue-800 whitespace-nowrap">Parts Catalog</button>
          <Icon name="ChevronRight" size={16} />
          <span className="text-slate-900 whitespace-nowrap">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Left Column - Product Images and Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Product Header */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
                  <p className="text-lg text-slate-600 mb-2">Part Number: {product.partNumber}</p>
                  <p className="text-slate-600">Manufacturer: {product.manufacturer}</p>
                </div>
                <div className="flex justify-end items-center mt-2 sm:mt-0">
                  {/* <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-sm border ${
                    product.inStock !== false && product.availability !== 'backorder'
                      ? 'bg-green-50 text-green-800 border-green-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}> */}
                    {/* <Icon
                      name={product.inStock !== false && product.availability !== 'backorder' ? "CheckCircle" : "Clock"}
                      size={14}
                      className={product.inStock !== false && product.availability !== 'backorder' ? 'text-green-600' : 'text-amber-600'}
                    />
                    {product.inStock !== false && product.availability !== 'backorder'
                      ? <span>In Stock{product.stockCount ? ` (${product.stockCount})` : ''}</span>
                      : <span>Limited Stock</span>}
                  </span> */}
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed">
                {product.features?.join(', ') || 'Professional-grade component designed for reliable performance and long service life.'}
              </p>
            </div>

            {/* Product Images */}
            <ProductImageGallery 
              images={images} 
              productName={product.name}
              product={product} 
            />

            {/* Tab Navigation */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="border-b border-slate-200 overflow-x-auto">
                <nav className="flex space-x-4 sm:space-x-8 px-2 sm:px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-3 sm:py-4 border-b-2 font-medium text-xs sm:text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-800 text-blue-800' : 'border-transparent text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <Icon name={tab.icon} size={16} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Product Description</h3>
                      <p className="text-slate-700 mb-4">
                        {product.name} is a high-quality component designed for {product.manufacturer} {product.model} crawler cranes.
                        This part ensures optimal performance and reliability in demanding operational conditions.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-800">{product.specifications?.["Weight"] || "2.5 kg"}</div>
                        <div className="text-xs sm:text-sm text-slate-600">Weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-800">4-6 hours</div>
                        <div className="text-xs sm:text-sm text-slate-600">Installation Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-800">{product.specifications?.["Warranty"] || "12 months"}</div>
                        <div className="text-xs sm:text-sm text-slate-600">Warranty</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* {activeTab === 'specifications' && (
                  <ProductSpecifications specifications={specifications} />
                )} */}

                {/* {activeTab === 'compatibility' && (
                  <CompatibilitySection 
                    compatibleModels={compatibleModels} 
                    crossReferences={crossReferences} 
                  />
                )}

                {activeTab === 'installation' && (
                  <InstallationResources resources={installationResources} />
                )}

                {activeTab === 'reviews' && (
                  <CustomerReviews 
                    reviews={reviews} 
                    averageRating={product.rating || 4.5} 
                    totalReviews={reviews.length} 
                  />
                )} */}
              </div>
            </div>

            {/* Related Products */}
            {/* <RelatedProducts relatedProducts={relatedProducts} bundles={bundles} /> */}
          </div>

          {/* Right Column - Ordering Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 z-10">
              <OrderingSection 
                product={product} 
                pricing={pricing} 
                deliveryOptions={deliveryOptions} 
                contactAdminMode={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;