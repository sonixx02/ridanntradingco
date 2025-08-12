import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import SearchBar from '../../../components/ui/SearchBar';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import { filterOptions } from '../../../data/products';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    manufacturers: true,
    // availability: true,
    // price: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    onFilterChange('search', value);
  };

  const handleCheckboxChange = (type, value, isChecked) => {
    const currentValues = filters[type] || [];
    const newValues = isChecked
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value);
    onFilterChange(type, newValues);
  };

  const handlePriceChange = (type, value) => {
    const currentRange = filters.priceRange || {};
    onFilterChange('priceRange', {
      ...currentRange,
      [type]: value
    });
  };

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-slate-200 pb-4 mb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left text-sm font-semibold text-slate-900 mb-3"
      >
        {title}
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-slate-500"
        />
      </button>
      {isExpanded && children}
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-slate-200 ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-slate-600 hover:text-slate-900"
          >
            Clear All
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar
            value={filters.search || ''}
            onChange={handleSearchChange}
            placeholder="Search by part name or number..."
            className="w-full"
          />
        </div>

        {/* Categories */}
        <FilterSection
          title="Categories"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection('categories')}
        >
          <div className="space-y-2">
            {filterOptions.categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={filters.categories?.includes(category.slug) || false}
                  onChange={(checked) => handleCheckboxChange('categories', category.slug, checked)}
                  label={category.name}
                />
                {/* <span className="text-sm text-slate-500">({category.count})</span> */}
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Manufacturers */}
        <FilterSection
          title="Manufacturers"
          isExpanded={expandedSections.manufacturers}
          onToggle={() => toggleSection('manufacturers')}
        >
          <div className="space-y-2">
            {filterOptions.manufacturers.map((manufacturer) => (
              <div key={manufacturer.id} className="flex items-center justify-between">
                <Checkbox
                  id={`manufacturer-${manufacturer.id}`}
                  checked={filters.manufacturers?.includes(manufacturer.slug) || false}
                  onChange={(checked) => handleCheckboxChange('manufacturers', manufacturer.slug, checked)}
                  label={manufacturer.name}
                />
                {/* <span className="text-sm text-slate-500">({manufacturer.count})</span> */}
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Availability */}
        {/* <FilterSection
          title="Availability"
          isExpanded={expandedSections.availability}
          onToggle={() => toggleSection('availability')}
        >
          <div className="space-y-2">
            {filterOptions.availability.map((availability) => (
              <div key={availability.id} className="flex items-center justify-between">
                <Checkbox
                  id={`availability-${availability.id}`}
                  checked={filters.availability?.includes(availability.slug) || false}
                  onChange={(checked) => handleCheckboxChange('availability', availability.slug, checked)}
                  label={availability.name}
                />
                <span className="text-sm text-slate-500">({availability.count})</span>
              </div>
            ))}
          </div>
        </FilterSection> */}


      </div>
    </div>
  );
};

export default FilterSidebar;