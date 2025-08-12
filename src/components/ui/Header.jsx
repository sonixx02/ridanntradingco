import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Parts Catalog', path: '/product-catalog', icon: 'Package' },
    { name: 'About Us', path: '/about', icon: 'Info' },
    { name: 'Contact Us', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      // Navigate to catalog with search query
      navigate(`/product-catalog?search=${encodeURIComponent(trimmedQuery)}`);
      setSearchQuery('');
      // If we're already on the product catalog page, we need to trigger a search
      if (location.pathname === '/product-catalog') {
        window.location.reload();
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile-optimized header row */}
        <div className="flex items-center justify-between h-16 lg:h-28">
          {/* Logo - properly sized for mobile */}
          <Link to="/homepage" className="flex items-center flex-shrink-0">
            <img
              src="/assets/images/download.png"
              alt="Ridaan TradingCo logo"
              className="h-16 w-12 lg:h-28 lg:w-24 object-contain"
            />
            {/* Brand text - hidden on mobile, shown on sm screens and up */}
            <div className="hidden sm:flex flex-col ml-3 leading-tight">
              <span className="text-lg lg:text-2xl font-semibold text-gray-900">Ridaan</span>
              <span className="text-xs lg:text-sm text-gray-600">TradingCo</span>
            </div>
          </Link>

          {/* Mobile menu button - more prominent */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Search for mobile */}
            <form onSubmit={handleSearch} className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                iconName="Search"
                onClick={() => setIsMobileSearchOpen(true)}
                className="text-gray-700 hover:bg-gray-100 p-2"
              />
            </form>

            {/* Mobile menu toggle button */}
            <Button
              variant="ghost"
              size="lg"
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:bg-gray-100 p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            />

            {/* Desktop navigation - unchanged */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium ${
                    isActivePath(item.path)
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop search */}
            <form onSubmit={handleSearch} className="hidden lg:block">
              <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by part name or number..."
                className="w-64"
              />
            </form>
          </div>
        </div>

        {/* Mobile search - appears when menu is open */}
        {/* {isMobileMenuOpen && (
          <div className="lg:hidden py-2 px-4 border-t border-gray-100">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mobile-search-input w-full p-2 pl-10 text-sm border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-gray-300 focus:outline-none"
              />
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </form>
          </div>
        )} */}

        {/* Mobile menu - improved spacing and tap targets */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white">
            <nav className="flex flex-col py-2 px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium ${
                    isActivePath(item.path)
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="bg-white p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search Parts</h3>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={() => setIsMobileSearchOpen(false)}
                className="text-gray-700"
              />
            </div>
            <form onSubmit={handleSearch}>
              <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by part name or number..."
                className="w-full"
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;