import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true
    },
    {
      id: 2,
      name: "OSHA Compliant",
      description: "Safety Standards Certified",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true
    },
    {
      id: 3,
      name: "OEM Authorized",
      description: "Official Parts Distributor",
      logo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true
    },
    {
      id: 4,
      name: "API Certified",
      description: "American Petroleum Institute",
      logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true
    }
  ];

  const statistics = [
    {
      id: 1,
      value: "99.2%",
      label: "On-Time Delivery Rate",
      description: "Consistently reliable delivery performance",
      icon: "Truck",
      color: "text-green-600"
    },
    {
      id: 2,
      value: "24/7",
      label: "Emergency Support",
      description: "Round-the-clock technical assistance",
      icon: "Phone",
      color: "text-blue-600"
    },
    {
      id: 3,
      value: "15,000+",
      label: "Parts in Stock",
      description: "Comprehensive inventory ready to ship",
      icon: "Package",
      color: "text-purple-600"
    },
    {
      id: 4,
      value: "98.7%",
      label: "Customer Satisfaction",
      description: "Based on verified customer reviews",
      icon: "Star",
      color: "text-yellow-600"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      title: "Fleet Maintenance Manager",
      company: "Construction Solutions Inc.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: `The technical expertise and part availability at Crawler Crane Parts Hub is exceptional. When our LR 1300 needed a hydraulic pump replacement, they had the exact OEM part in stock and delivered it within 24 hours. Their compatibility verification saved us from costly downtime.`,
      verified: true,
      location: "Houston, TX"
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Procurement Specialist",
      company: "Heavy Lift Operations",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: `Outstanding service and technical support. The team helped us identify the correct track chain assembly for our Manitowoc 18000. Their detailed specifications and installation guidance made the replacement process seamless. Highly recommend for any crane maintenance needs.`,
      verified: true,
      location: "Denver, CO"
    },
    {
      id: 3,
      name: "James Thompson",
      title: "Senior Crane Operator",
      company: "Industrial Crane Services",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      text: `Been using their parts for over 3 years now. Quality is consistently excellent, and their emergency support has saved us multiple times during critical projects. The online catalog makes finding compatible parts incredibly easy.`,
      verified: true,
      location: "Atlanta, GA"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Professionals
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to quality, reliability, and professional service has earned the trust 
            of maintenance managers and crane operators across the industry.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className={`w-12 h-12 ${stat.color} bg-current/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={stat.icon} size={24} className={stat.color} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
                <div className="relative mb-4">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} certification`}
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                  {cert.verified && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{cert.name}</h4>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200">


                {/* Testimonial Text */}
                <blockquote className="text-slate-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Icon name="CheckCircle" size={16} className="text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{testimonial.title}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                    <p className="text-xs text-slate-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Quality Guarantee</h3>
            <p className="text-slate-300 mb-6">
              Every part comes with our comprehensive warranty and quality guarantee. 
              If you're not completely satisfied with your purchase, we'll make it right.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="RotateCcw" size={24} className="text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">30-Day Returns</p>
                <p className="text-sm text-slate-400">Hassle-free returns</p>
              </div>
              <div>
                <Icon name="Award" size={24} className="text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Quality Certified</p>
                <p className="text-sm text-slate-400">OEM specifications</p>
              </div>
              <div>
                <Icon name="Headphones" size={24} className="text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Expert Support</p>
                <p className="text-sm text-slate-400">Technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;