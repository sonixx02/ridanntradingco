import React from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';

const ProductGrid = ({ products, viewMode, loading }) => {
  const getPlaceholderImage = (index) => {
    const colors = ['bg-slate-300', 'bg-gray-300', 'bg-zinc-300', 'bg-neutral-300'];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-slate-200 p-4 animate-pulse">
            <div className="bg-slate-300 h-48 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="bg-slate-300 h-4 rounded w-3/4"></div>
              <div className="bg-slate-300 h-4 rounded w-1/2"></div>
              <div className="bg-slate-300 h-4 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <Icon name="Search" size={48} className="text-slate-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
        <p className="text-slate-600">Try adjusting your search terms or filters</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 mb-8 ${
      viewMode === 'grid' ?'md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
    }`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          placeholderImage={getPlaceholderImage(index)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;