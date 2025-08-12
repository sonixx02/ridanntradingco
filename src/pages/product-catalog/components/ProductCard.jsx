import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
// import { Checkbox } from '../../../components/ui/Checkbox';

const ProductCard = ({ product, viewMode }) => {
  const navigate = useNavigate();

  const getAvailabilityInfo = (product) => {
    if (!product.inStock) {
      return {
        color: 'text-red-600 bg-red-50',
        text: 'Out of Stock'
      };
    }

    if (product.stockCount <= 0) {
      return {
        color: 'text-red-600 bg-red-50',
        text: 'Out of Stock'
      };
    }

    if (product.stockCount <= 5) {
      return {
        color: 'text-amber-600 bg-amber-50',
        text: 'Limited Stock'
      };
    }

    return {
      color: 'text-green-600 bg-green-50',
      text: 'In Stock'
    };
  };



  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };



  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer" onClick={handleProductClick}>
        <div className="flex">
          {/* Product Image */}
          <div className="w-32 h-32 flex-shrink-0 bg-slate-100">
            <Image
              src={product.images?.main || '/assets/images/no_image.png'}
              alt={product.name}
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-slate-400" />
                </div>
              }
            />
          </div>
          {/* Product Info */}
          <div className="flex-1 p-4">
            <h3 className="font-semibold text-slate-900 text-lg mb-1">{product.name}</h3>
            <p className="text-slate-600 text-sm mb-1">Part #: {product.partNumber}</p>
            <p className="text-slate-500 text-sm mb-1">{product.manufacturer}</p>
            <p className="text-slate-500 text-sm mb-1">Category: {product.category}</p>
            {/* <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityInfo(product).color}`}>
              {getAvailabilityInfo(product).text}
              {product.stockCount > 0 && product.inStock && (
                <span className="ml-1">({product.stockCount})</span>
              )}
            </span> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer" onClick={handleProductClick}>
      {/* Product Image */}
      <div className="relative">
        <div className="w-full h-48 bg-slate-100">
          <Image
            src={product.images?.main || '/assets/images/no_image.png'}
            alt={product.name}
            className="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Package" size={48} className="text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm font-medium">Product Image</p>
                </div>
              </div>
            }
          />
        </div>
        {/* Badges */}
        {/* <div className="absolute top-3 right-3 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.isPopular && (
            <span className="bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div> */}
        {/* Availability Badge */}
        {/* <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityInfo(product).color}`}>
            {getAvailabilityInfo(product).text}
            {product.stockCount > 0 && product.inStock && (
              <span className="ml-1">({product.stockCount})</span>
            )}
          </span>
        </div> */}
      </div>
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-1">Part #: {product.partNumber}</p>
        <p className="text-slate-500 text-sm mb-1">{product.manufacturer}</p>
        <p className="text-slate-500 text-sm mb-1">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;