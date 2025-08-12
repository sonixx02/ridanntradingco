import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const catalogLinks = [
    { name: "Parts Catalog", href: "/product-catalog" },
    { name: "Liebherr Cranes", href: "/product-catalog?manufacturer=liebherr" },
    { name: "Manitowoc Cranes", href: "/product-catalog?manufacturer=manitowoc" },
    { name: "Terex Cranes", href: "/product-catalog?manufacturer=terex" },
    { name: "Kobelco Cranes", href: "/product-catalog?manufacturer=kobelco" }
  ];

  const contactInfo = {
    phone: "9833647896",
    email: "ridaantradingCo@gmail.com",
    emergencyPhone: ["9904647896", "8451847896", "022-40117896"]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Combined Parts Catalog and Crane Models */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Parts & Models</h4>
            <ul className="space-y-2">
              {catalogLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden bg-white border border-slate-200">
                <img
                  src="/assets/images/download.png"
                  alt="Ridaan TradingCo logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ridaan</h3>
                <p className="text-blue-300 font-medium">TradingCo</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-blue-400" />
                  <div>
                    <p className="font-medium">Sales & Support</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-300 hover:text-blue-200">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-green-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-green-300 hover:text-green-200">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size={18} className="text-red-400 mt-0.5" />
                  <div>
                    <p className="font-medium">Emergency</p>
                    {contactInfo.emergencyPhone.map((num) => (
                      <a key={num} href={`tel:${num}`} className="block text-red-300 hover:text-red-200">
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Ridaan TradingCo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;