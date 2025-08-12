import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const IndustryNews = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsArticles = [
    {
      id: 1,
      title: "New Safety Regulations for Crawler Crane Operations",
      excerpt: "OSHA announces updated safety standards for crawler crane operations, effective January 2025. Key changes include enhanced inspection requirements and operator certification updates.",
      category: "Regulatory",
      date: "2025-01-15",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      // urgent: true
    },
    {
      id: 2,
      title: "Liebherr Announces LR 1800 Series Upgrade",
      excerpt: "Enhanced hydraulic systems and improved fuel efficiency highlight the latest updates to Liebherr\'s flagship crawler crane series. Parts availability expected Q2 2025.",
      category: "Product Updates",
      date: "2025-01-12",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      // urgent: false
    },
    {
      id: 3,
      title: "Supply Chain Update: Track Component Availability",
      excerpt: "Current market conditions affecting track chain and undercarriage component availability. Alternative sourcing options and delivery timeline updates.",
      category: "Supply Chain",
      date: "2025-01-10",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      // urgent: true
    }
  ];

  const maintenanceTips = [
    {
      id: 1,
      title: "Hydraulic System Winterization Checklist",
      description: "Essential steps to protect your crawler crane's hydraulic system during cold weather operations. Includes fluid specifications and inspection points.",
      // difficulty: "Intermediate",
      // duration: "45 minutes",
      tools: ["Hydraulic fluid tester", "Temperature gauge", "Basic tools"],
      category: "Seasonal Maintenance",
      // priority: "High"
    },
    {
      id: 2,
      title: "Track Tension Adjustment Procedure",
      description: "Step-by-step guide for proper track tension adjustment to prevent premature wear and ensure optimal performance.",
      // difficulty: "Beginner",
      // duration: "30 minutes",
      tools: ["Tension gauge", "Grease gun", "Wrench set"],
      category: "Undercarriage",
      // priority: "Medium"
    },
    {
      id: 3,
      title: "Boom Cylinder Seal Inspection",
      description: "How to identify early signs of seal wear and prevent costly hydraulic failures. Includes troubleshooting guide and replacement indicators.",
      // difficulty: "Advanced",
      // duration: "60 minutes",
      tools: ["Pressure tester", "Seal kit", "Hydraulic jack"],
      category: "Hydraulics",
      // priority: "High"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Regulatory': 'bg-red-100 text-red-800',
      'Product Updates': 'bg-blue-100 text-blue-800',
      'Supply Chain': 'bg-amber-100 text-amber-800',
      'Seasonal Maintenance': 'bg-purple-100 text-purple-800',
      'Undercarriage': 'bg-green-100 text-green-800',
      'Hydraulics': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-slate-100 text-slate-800';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'text-green-600',
      'Intermediate': 'text-amber-600',
      'Advanced': 'text-red-600'
    };
    return colors[difficulty] || 'text-slate-600';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'text-red-600',
      'Medium': 'text-amber-600',
      'Low': 'text-green-600'
    };
    return colors[priority] || 'text-slate-600';
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Industry Knowledge Hub
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest industry updates, regulatory changes, and professional maintenance guidance. 
            Your trusted source for ridaantradingco expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'news' ?'bg-blue-600 text-white shadow-sm' :'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Newspaper" size={18} />
                <span>Industry News</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'maintenance' ?'bg-blue-600 text-white shadow-sm' :'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Wrench" size={18} />
                <span>Maintenance Tips</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'news' ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Article Image */}
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  {article.urgent && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Urgent
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    Read Full Article
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {maintenanceTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tip.category)}`}>
                    {tip.category}
                  </div>
                  {/* <div className={`text-sm font-medium ${getPriorityColor(tip.priority)}`}>
                    {tip.priority} Priority
                  </div> */}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {tip.title}
                </h3>

                <p className="text-slate-600 mb-4">
                  {tip.description}
                </p>

                {/* Metadata
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Difficulty:</span>
                    <span className={`font-medium ${getDifficultyColor(tip.difficulty)}`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium text-slate-900">{tip.duration}</span>
                  </div>
                </div> */}

                {/* Tools Required */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Tools Required:</h4>
                  <div className="space-y-1">
                    {tip.tools.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="BookOpen"
                  iconPosition="left"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  View Guide
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest industry news, maintenance tips, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
                className="bg-white text-blue-800 hover:bg-blue-50 px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryNews;