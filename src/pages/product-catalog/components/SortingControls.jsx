import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortingControls = ({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  resultsCount, 
  currentPage, 
  totalPages,
  onBulkAction 
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Relevance', icon: 'Target' },
    { value: 'availability', label: 'Availability', icon: 'Package' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { value: 'list', icon: 'List', label: 'List View' }
  ];



  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Results Info */}
        <div className="flex items-center space-x-4">
          <div className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">{resultsCount.toLocaleString()}</span> parts found
          </div>
          <div className="text-sm text-slate-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Sort Dropdown */}
          {/* <div className="flex items-center space-x-2">
            <Icon name="ArrowUpDown" size={16} className="text-slate-500" />
            <span className="text-sm text-slate-600 whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="text-sm border border-slate-300 rounded px-3 py-1.5 bg-white text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
            {viewModes.map((mode) => (
              <button
                key={mode.value}
                onClick={() => onViewModeChange(mode.value)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  viewMode === mode.value
                    ? 'bg-white text-blue-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={mode.label}
              >
                <Icon name={mode.icon} size={16} />
                <span className="hidden sm:inline">{mode.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>


        </div>
      </div>

      {/* Mobile Filters Summary */}
      <div className="lg:hidden mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Icon name="Filter" size={16} />
            <span>3 filters applied</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-800"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortingControls;