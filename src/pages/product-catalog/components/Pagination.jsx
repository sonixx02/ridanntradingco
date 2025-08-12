import React from 'react';

import Button from '../../../components/ui/Button';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange, 
  onItemsPerPageChange 
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const itemsPerPageOptions = [12, 24, 48, 96];

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 mt-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Results Info */}
        <div className="flex items-center justify-between lg:justify-start space-x-4">
          <div className="text-sm text-slate-600">
            Showing <span className="font-medium text-slate-900">{startItem}</span> to{' '}
            <span className="font-medium text-slate-900">{endItem}</span> of{' '}
            <span className="font-medium text-slate-900">{totalItems.toLocaleString()}</span> results
          </div>
          
          {/* Items per page selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600 whitespace-nowrap">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="text-sm border border-slate-300 rounded px-2 py-1 bg-white text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center lg:justify-end space-x-1">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            iconName="ChevronLeft"
            className="px-3"
          />

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {getVisiblePages().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-3 py-2 text-sm text-slate-500">...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-blue-800 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            iconName="ChevronRight"
            className="px-3"
          />
        </div>
      </div>

      {/* Mobile Page Info */}
      <div className="lg:hidden mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className="text-xs"
            >
              First
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="text-xs"
            >
              Last
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Jump */}
      <div className="hidden lg:flex items-center justify-center mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-slate-600">Jump to page:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            className="w-16 px-2 py-1 text-center border border-slate-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  onPageChange(page);
                  e.target.value = '';
                }
              }
            }}
            placeholder={currentPage.toString()}
          />
          <span className="text-slate-500">of {totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;