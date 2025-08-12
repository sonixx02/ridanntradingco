import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
const RelatedProducts = ({ relatedProducts }) => {
  const navigate = useNavigate();

  

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  

  return (
    <div className="space-y-6 sm:space-y-8">
     

      {/* Related Products */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        <div className="p-4 sm:p-6 border-b border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
            <Icon name="Grid3x3" size={24} className="text-blue-800" />
            <span>Related Products</span>
          </h3>
          <p className="text-slate-600 mt-2">
            Other parts frequently purchased with this item
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200 cursor-pointer" onClick={() => handleViewProduct(product.id)}>
                <div className="aspect-square bg-slate-100 relative">
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
                  {product.inStock ? (
                    <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      In Stock
                    </div>
                  ) : (
                    <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      2-3 Days
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-slate-900 mb-1">{product.name}</h4>
                  <p className="text-sm text-slate-600 mb-2">{product.partNumber}</p>
                  <p className="text-xs text-slate-500 mb-3">{product.description}</p>
                  
                  {/* <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-slate-900">${product.price}</div>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <Icon
                          key={starIndex}
                          name="Star"
                          size={12}
                          className={starIndex < product.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}
                        />
                      ))}
                      <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
                    </div>
                  </div> */}
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProduct(product.id);
                      }}
                      className="flex-1"
                    >
                      View
                    </Button>
                    {/* <Button
                      variant="default"
                      size="sm"
                      iconName="Plus"
                      iconPosition="left"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToQuote(product.id);
                      }}
                      className="flex-1 bg-blue-800 hover:bg-blue-900"
                    >
                      Quote
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        <div className="p-4 sm:p-6 border-b border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
            <Icon name="Clock" size={24} className="text-slate-600" />
            <span>Recently Viewed</span>
          </h3>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
            {relatedProducts.slice(0, 4).map((product, index) => (
              <div key={index} className="flex-shrink-0 w-40 sm:w-48 border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200 cursor-pointer" onClick={() => handleViewProduct(product.id)}>
                <div className="aspect-square bg-slate-100">
                  <Image
                    src={product.images?.main || product.image || '/assets/images/no_image.png'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-slate-900 text-sm mb-1 truncate">{product.name}</h4>
                  <p className="text-xs text-slate-600 mb-2">{product.partNumber}</p>
                  {/* <div className="text-sm font-bold text-slate-900">${product.price}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;