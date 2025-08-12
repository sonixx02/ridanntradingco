import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OrderingSection = ({ product, pricing, deliveryOptions, contactAdminMode }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [showTechnicalConsult, setShowTechnicalConsult] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const getCurrentPrice = () => {
    const priceBreak = pricing.breaks.find(
      (breakPoint) => quantity >= breakPoint.minQty
    ) || pricing.breaks[0];
    return priceBreak.price;
  };

  const getTotalPrice = () => {
    return getCurrentPrice() * quantity;
  };

  const getDeliveryInfo = () => {
    return deliveryOptions.find(option => option.id === selectedDelivery);
  };

  const handleAddToQuote = () => {
    console.log('Added to quote:', {
      productId: product.id,
      quantity,
      delivery: selectedDelivery,
      price: getCurrentPrice()
    });
  };

  const handleEmergencyOrder = () => {
    console.log('Emergency order placed');
  };

  const handleTechnicalConsult = () => {
    setShowTechnicalConsult(true);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Pricing Card (commented for contact admin mode) */}
      {/*
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Pricing</h3>
            <div className="text-right mt-2 sm:mt-0">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">${getCurrentPrice()}</div>
              <div className="text-xs sm:text-sm text-slate-600">per unit</div>
            </div>
          </div>
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-medium text-slate-700 mb-2 sm:mb-3">Quantity Pricing</h4>
            <div className="space-y-1 sm:space-y-2">
              {pricing.breaks.map((breakPoint, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg border ${
                    quantity >= breakPoint.minQty
                      ? 'border-blue-300 bg-blue-50' :'border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-700">
                    {breakPoint.minQty}+ units
                  </span>
                  <span className="font-medium text-slate-900">
                    ${breakPoint.price} each
                  </span>
                  {breakPoint.savings && (
                    <span className="text-xs text-green-600 font-medium">
                      Save {breakPoint.savings}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-8 h-8 sm:w-10 sm:h-10 border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-50"
                disabled={quantity <= 1}
              >
                <Icon name="Minus" size={16} />
              </button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-14 sm:w-20 text-center"
                min="1"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-8 h-8 sm:w-10 sm:h-10 border border-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-50"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-slate-50 rounded-lg mb-4 sm:mb-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-slate-900">Total Price:</span>
              <span className="text-2xl font-bold text-blue-800">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Contact Admin to Buy */}
      {contactAdminMode && (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          <div className="p-4 sm:p-6 flex flex-col items-center justify-center gap-4">
            <Icon name="PhoneCall" size={32} className="text-blue-800" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 text-center">Contact Admin to Buy</h3>
            <p className="text-slate-600 text-center text-sm">To purchase this product, please contact our admin directly. We will assist you with pricing, discounts, and order processing.</p>
            <Button
              variant="default"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              className="bg-blue-800 hover:bg-blue-900 text-lg py-3 w-full"
              onClick={() => window.open('tel:1-800-CRANE-PARTS')}
            >
              Call Admin Now
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              className="w-full"
              onClick={() => window.open('mailto:support@craneparts.com')}
            >
              Email Admin
            </Button>
          </div>
        </div>
      )}

      

     

      {/* Trust Elements
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Trust & Warranty</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Icon name="Shield" size={20} className="text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-slate-900">2-Year Warranty</h4>
                <p className="text-sm text-slate-600">
                  Full manufacturer warranty with free replacement for defective parts
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <Icon name="RotateCcw" size={20} className="text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-slate-900">30-Day Returns</h4>
                <p className="text-sm text-slate-600">
                  Return unused parts in original packaging within 30 days
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <Icon name="Award" size={20} className="text-purple-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-slate-900">OEM Quality</h4>
                <p className="text-sm text-slate-600">
                  Meets or exceeds original equipment manufacturer specifications
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <Icon name="Headphones" size={20} className="text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-slate-900">Expert Support</h4>
                <p className="text-sm text-slate-600">
                  Technical support from certified crane maintenance specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Technical Consultation Modal
      {showTechnicalConsult && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Technical Consultation</h3>
              <button
                onClick={() => setShowTechnicalConsult(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <p className="text-slate-600 mb-4">
              Connect with our technical specialists for installation guidance and compatibility verification.
            </p>
            
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="bg-blue-800 hover:bg-blue-900"
              >
                Call Now: 1-800-CRANE-PARTS
              </Button>
              
              <Button
                variant="outline"
                fullWidth
                iconName="MessageSquare"
                iconPosition="left"
              >
                Start Live Chat
              </Button>
              
              <Button
                variant="ghost"
                fullWidth
                iconName="Mail"
                iconPosition="left"
              >
                Email Technical Team
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default OrderingSection;