import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
const QuoteBuilder = ({ items, onRemoveItem, onQuantityChange }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const calculateTotal = () => {
    return quoteItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateBulkSavings = () => {
    return quoteItems.reduce((savings, item) => {
      if (item.bulkPrice && item.quantity >= item.minBulkQty) {
        return savings + ((item.price - item.bulkPrice) * item.quantity);
      }
      return savings;
    }, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  const handleRequestQuote = () => {
    const quoteData = {
      items: quoteItems,
      customer: customerInfo,
      total: calculateTotal(),
      savings: calculateBulkSavings(),
      timestamp: new Date().toISOString()
    };
    onRequestQuote(quoteData);
  };

  const totalItems = quoteItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = calculateTotal();
  const bulkSavings = calculateBulkSavings();

  return (
    <>
      {/* Mobile Quote Toggle */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button
          variant="default"
          onClick={onToggle}
          iconName="ShoppingCart"
          iconPosition="left"
          className="bg-blue-800 hover:bg-blue-900 shadow-lg"
        >
          Quote ({totalItems})
        </Button>
      </div>

      {/* Quote Builder Sidebar */}
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 fixed lg:sticky top-0 right-0 h-full lg:h-fit lg:top-24 w-80 bg-white border-l lg:border lg:rounded-lg border-slate-200 shadow-xl lg:shadow-sm z-40 transition-transform duration-300 ease-in-out`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Icon name="ShoppingCart" size={20} className="text-blue-800" />
            <h3 className="font-semibold text-slate-900">Quote Builder</h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
              {totalItems}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              iconName="X"
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Quote Items */}
        <div className="flex-1 overflow-y-auto max-h-96 lg:max-h-80">
          {quoteItems.length === 0 ? (
            <div className="p-6 text-center">
              <Icon name="ShoppingCart" size={48} className="text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 mb-2">No items in quote</p>
              <p className="text-sm text-slate-400">Add parts to build your quote</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {quoteItems.map((item) => (
                <div key={item.id} className="flex space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.images?.main || '/assets/images/no_image.png'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded">
                          <Icon name="Package" size={20} className="text-slate-400" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">{item.partNumber}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded text-slate-600 hover:bg-slate-50"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded text-slate-600 hover:bg-slate-50"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="text-sm font-medium text-slate-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    {item.bulkPrice && item.quantity >= item.minBulkQty && (
                      <div className="text-xs text-green-600">
                        Bulk: {formatPrice(item.bulkPrice * item.quantity)}
                      </div>
                    )}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quote Summary */}
        {quoteItems.length > 0 && (
          <div className="border-t border-slate-200 p-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal ({totalItems} items)</span>
                <span className="font-medium">{formatPrice(totalValue)}</span>
              </div>
              {bulkSavings > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Bulk Savings</span>
                  <span className="text-green-600 font-medium">-{formatPrice(bulkSavings)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Estimated Tax</span>
                <span className="font-medium">{formatPrice(totalValue * 0.08)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold pt-2 border-t border-slate-200">
                <span>Total</span>
                <span>{formatPrice(totalValue + (totalValue * 0.08) - bulkSavings)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                variant="default"
                fullWidth
                onClick={handleRequestQuote}
                iconName="Send"
                iconPosition="left"
                className="bg-blue-800 hover:bg-blue-900"
              >
                Request Quote
              </Button>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClearQuote}
                  iconName="Trash2"
                  iconPosition="left"
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  Clear
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  className="flex-1"
                >
                  Export
                </Button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center space-x-2 text-sm text-slate-600 mb-2">
                <Icon name="Phone" size={16} />
                <span>Need help? Call us:</span>
              </div>
              <div className="text-lg font-semibold text-blue-800">
                1-800-CRANE-PARTS
              </div>
              <div className="text-xs text-slate-500">
                Mon-Fri 7AM-6PM EST
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default QuoteBuilder;