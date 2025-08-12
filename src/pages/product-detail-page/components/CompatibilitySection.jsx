import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
const CompatibilitySection = ({ compatibleModels, crossReferences }) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const manufacturers = ['all', ...new Set(compatibleModels.map(model => model.manufacturer))];

  const filteredModels = compatibleModels.filter(model => {
    const matchesManufacturer = selectedManufacturer === 'all' || model.manufacturer === selectedManufacturer;
    const matchesSearch = model.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.series.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesManufacturer && matchesSearch;
  });

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
          <Icon name="CheckCircle" size={24} className="text-green-600" />
          <span>Compatibility Information</span>
        </h3>
        <p className="text-slate-600 mt-2">
          This part is compatible with the following crane models. Verify your specific model before ordering.
        </p>
      </div>

      <div className="p-4 sm:p-6">
        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by model or series..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
            />
          </div>
          <select
            value={selectedManufacturer}
            onChange={(e) => setSelectedManufacturer(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
          >
            {manufacturers.map(manufacturer => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer === 'all' ? 'All Manufacturers' : manufacturer}
              </option>
            ))}
          </select>
        </div>

        {/* Compatible Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {filteredModels.map((model, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start space-x-3">
                <Image
                  src={model.manufacturerLogo || '/assets/images/manufacturer-logos/default.png'}
                  alt={`${model.manufacturer} ${model.model}`}
                  className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                  fallback={
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-lg">
                      <Icon name="Building" size={24} className="text-slate-400" />
                    </div>
                  }
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{model.manufacturer}</h4>
                  <p className="text-slate-700">{model.model}</p>
                  <p className="text-sm text-slate-500">{model.series}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      model.verified 
                        ? 'bg-green-100 text-green-800' :'bg-amber-100 text-amber-800'
                    }`}>
                      <Icon 
                        name={model.verified ? "CheckCircle" : "AlertTriangle"} 
                        size={12} 
                        className="mr-1" 
                      />
                      {model.verified ? 'Verified' : 'Check Manual'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross Reference Numbers */}
        <div className="border-t border-slate-200 pt-4 sm:pt-6">
          <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
            <Icon name="RefreshCw" size={20} className="text-blue-800" />
            <span>Cross Reference Part Numbers</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {crossReferences.map((ref, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">{ref.manufacturer}</p>
                  <p className="text-sm text-slate-600">Part #{ref.partNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-slate-700">{ref.oem ? 'OEM' : 'Aftermarket'}</p>
                  {ref.superseded && (
                    <p className="text-xs text-amber-600">Superseded</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility Warning */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-amber-800">Important Compatibility Notice</h5>
              <p className="text-sm text-amber-700 mt-1">
                Always verify part compatibility with your specific crane model and serial number before ordering. 
                Manufacturing changes may affect compatibility even within the same model series.
              </p>
              <button className="mt-2 text-sm text-amber-800 hover:text-amber-900 font-medium underline">
                Contact Technical Support for Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilitySection;