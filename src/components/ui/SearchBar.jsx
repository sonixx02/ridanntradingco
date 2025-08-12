import React from 'react';
import Input from './Input';
import Icon from '../AppIcon';

const SearchBar = ({ value, onChange, placeholder = "Search...", className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Icon name="Search" size={16} className="text-slate-400" />
      </div>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
