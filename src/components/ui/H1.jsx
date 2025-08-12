import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Parts Catalog', path: '/product-catalog', icon: 'Package' },
    { name: 'About Us', path: '/about', icon: 'Info' },
    { name: 'Contact Us', path: '/contact', icon: 'Mail' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
  <Link to="/homepage" className="flex items-center space-x-3 py-2">
    <img
      src="/assets/images/download.png"
      alt="ridaan tradingco logo"
      className="h-20 w-28 object-contain"
    />
    <span className="hidden sm:block text-2xl font-bold text-gray-800">
      Ridaan Trading Co
    </span>
  </Link>
</div>


        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-200 ${
                isActivePath(item.path)
                  ? 'text-white bg-blue-700 shadow-md'
                  : 'text-slate-800 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Search + Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <form onSubmit={handleSearch} className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search hydraulic parts, models, or part numbers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-[280px] p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
            />
          </form>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="xl"
              iconName={isMobileMenuOpen ? 'X' : 'Menu'}
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:bg-blue-50 p-2"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 ${
                isActivePath(item.path)
                  ? 'text-white bg-blue-700 shadow'
                  : 'text-slate-800 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="text"
              placeholder="Search hydraulic parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
