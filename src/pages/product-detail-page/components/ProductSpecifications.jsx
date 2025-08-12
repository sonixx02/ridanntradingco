import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductSpecifications = ({ specifications }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
          <Icon name="Settings" size={24} className="text-blue-800" />
          <span>Technical Specifications</span>
        </h3>
      </div>

      <div className="divide-y divide-slate-200">
        {Object.entries(specifications).map(([sectionKey, section]) => (
          <div key={sectionKey} className="p-4 sm:p-6">
            <button
              onClick={() => toggleSection(sectionKey)}
              className="w-full flex items-center justify-between text-left hover:bg-slate-50 -m-2 p-2 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <Icon name={section.icon} size={20} className="text-slate-600" />
                <h4 className="text-lg font-medium text-slate-900">{section.title}</h4>
              </div>
              <Icon
                name={expandedSections[sectionKey] ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-slate-400"
              />
            </button>

            {expandedSections[sectionKey] && (
              <div className="mt-4 pl-4 sm:pl-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                      <span className="text-slate-600 font-medium">{spec.label}</span>
                      <span className="text-slate-900 font-mono text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {section.notes && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="AlertTriangle" size={16} className="text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">Important Notes</p>
                        <ul className="text-sm text-amber-700 mt-1 space-y-1">
                          {section.notes.map((note, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <span>•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Reference Card */}
      <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200">
        <h5 className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">Quick Reference</h5>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-800">2.5 kg</div>
            <div className="text-xs text-slate-600">Weight</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-800">Grade 8</div>
            <div className="text-xs text-slate-600">Material</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-800">M24</div>
            <div className="text-xs text-slate-600">Thread Size</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-800">500 Nm</div>
            <div className="text-xs text-slate-600">Torque</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;