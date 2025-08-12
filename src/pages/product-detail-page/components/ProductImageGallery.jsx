import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ images, productName, product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Use product.images?.gallery array if available, otherwise fall back to provided images
  const galleryImages = product?.images?.gallery || images;

  // Handle empty or invalid image data
  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="space-y-3 sm:space-y-4">
        <div className="relative bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="aspect-square relative w-full max-w-full bg-slate-100 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Image" size={48} className="text-slate-400 mx-auto mb-2" />
              <p className="text-slate-500 text-sm font-medium">No images available</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="aspect-square relative w-full max-w-full">
          <Image
            src={galleryImages[selectedImageIndex]?.url || galleryImages[selectedImageIndex] || '/assets/images/no_image.png'}
            alt={galleryImages[selectedImageIndex]?.alt || `${productName} - View ${selectedImageIndex + 1}`}
            className={`w-full h-full object-cover cursor-zoom-in transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={toggleZoom}
          />
          
          {/* Navigation Arrows */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Icon name="ChevronLeft" size={20} className="text-slate-700" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Icon name="ChevronRight" size={20} className="text-slate-700" />
              </button>
            </>
          )}

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-1 text-sm text-slate-700 flex items-center space-x-1">
            <Icon name="ZoomIn" size={16} />
            <span>Click to zoom</span>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-lg px-3 py-1 text-sm">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
              index === selectedImageIndex
                ? 'border-blue-800 ring-2 ring-blue-800/20' :'border-slate-200 hover:border-slate-300'
            }`}
          >
            <Image
              src={image?.url || image || '/assets/images/no_image.png'}
              alt={image?.alt || `${productName} - View ${index + 1}`}
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full flex items-center justify-center bg-slate-100">
                  <Icon name="Image" size={20} className="text-slate-400" />
                </div>
              }
            />
          </button>
        ))}
      </div>

      {/* Image Labels */}
      <div className="flex flex-wrap gap-2">
        {galleryImages[selectedImageIndex]?.labels?.map((label, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;