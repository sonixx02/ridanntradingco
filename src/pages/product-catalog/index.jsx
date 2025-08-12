import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import FilterSidebar from './components/FilterSidebar';
import SortingControls from './components/SortingControls';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import Icon from '../../components/AppIcon';
import { products } from '../../data/products';

const ProductCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [filters, setFilters] = useState({ search: initialSearch });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [productList, setProductList] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...productList];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(product =>
        // Search in product name
        product.name.toLowerCase().includes(searchTerm) ||
        // Search in manufacturer
        product.manufacturer.toLowerCase().includes(searchTerm) ||
        // Search in category
        product.category.toLowerCase().includes(searchTerm)
      );
    }

    // Apply specific manufacturer filter
    if (filters.manufacturers?.length > 0) {
      filtered = filtered.filter(product =>
        filters.manufacturers.includes(product.manufacturer.toLowerCase())
      );
    }

    // Apply specific category filter
    if (filters.categories?.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category.toLowerCase().replace(/\s+/g, '-'))
      );
    }

    if (filters.availability?.length > 0) {
      filtered = filtered.filter(product =>
        filters.availability.includes(product.availability)
      );
    }

    if (filters.priceRange?.min || filters.priceRange?.max) {
      filtered = filtered.filter(product => {
        const price = product.price;
        const min = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
        const max = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'popular':
        filtered.sort((a, b) => b.isPopular - a.isPopular);
        break;
      case 'availability':
        filtered.sort((a, b) => {
          const order = { 'in-stock': 0, 'limited': 1, 'backorder': 2 };
          return order[a.availability] - order[b.availability];
        });
        break;
      default:
        // Relevance - keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, products]);

  const handleFilterChange = (key, value) => {
    if (key === 'search') {
      // Update URL search params
      if (value) {
        setSearchParams({ search: value });
      } else {
        setSearchParams({});
      }
    }
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };



  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <><>
      <Helmet>
        <title>Parts Catalog - Crawler Crane Parts Hub</title>
        <meta name="description" content="Browse our comprehensive catalog of crawler crane parts and components. Find compatible parts for all major crane manufacturers with advanced filtering." />
        <meta name="keywords" content="crawler crane parts, heavy machinery parts, construction equipment, hydraulic components, engine parts" />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
              <span>Home</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-slate-900 font-medium">Parts Catalog</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Parts Catalog</h1>
            <p className="text-lg text-slate-600">
              Find the right parts for your crawler crane with our advanced search and filtering tools
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)} />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sorting Controls */}
              <SortingControls
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                resultsCount={filteredProducts.length}
                currentPage={currentPage}
                totalPages={totalPages} />

              {/* Product Grid */}
              <ProductGrid
                products={paginatedProducts}
                viewMode={viewMode}
                loading={loading} />

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={filteredProducts.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={setItemsPerPage} />
              )}
            </div>
          </div>
        </main>
      </div>
    </><Footer /></>
  );
};

export default ProductCatalog;