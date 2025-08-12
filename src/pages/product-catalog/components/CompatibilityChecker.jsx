import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CompatibilityChecker = ({ onCompatibilityCheck, isOpen, onToggle }) => {
  const [craneInfo, setCraneInfo] = useState({
    manufacturer: '',
    model: '',
    year: '',
    serialNumber: ''
  });
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState(null);

  const manufacturers = [
    'Caterpillar', 'Liebherr', 'Manitowoc', 'Terex', 'Kobelco', 'Hitachi', 'Sany', 'XCMG'
  ];

  const handleInputChange = (field, value) => {
    setCraneInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCompatibilityCheck = async () => {
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        compatibleParts: 1247,
        criticalParts: 89,
        maintenanceSchedule: {
          next: '2024-08-15',
          type: 'Hydraulic System Service'
        },
        recommendations: [
          {
            id: 1,
            name: 'Hydraulic Filter Kit',
            partNumber: 'HF-2847',
            priority: 'high',
            reason: 'Due for replacement based on operating hours'
          },
          {
            id: 2,
            name: 'Engine Oil Filter',
            partNumber: 'EF-1923',
            priority: 'medium',
            reason: 'Recommended for upcoming service'
          },
          {
            id: 3,
            name: 'Boom Cylinder Seal Kit',
            partNumber: 'BC-5671',
            priority: 'low',
            reason: 'Preventive maintenance item'
          }
        ]
      };
      
      setResults(mockResults);
      setIsChecking(false);
      onCompatibilityCheck(craneInfo, mockResults);
    }, 2000);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const isFormValid = craneInfo.manufacturer && craneInfo.model && craneInfo.year;

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Settings"
          iconPosition="left"
          className="w-full"
        >
          Compatibility Checker
        </Button>
      </div>

      {/* Compatibility Checker Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-white rounded-lg border border-slate-200 p-6 mb-6`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="Settings" size={20} className="text-blue-800" />
            <h3 className="text-lg font-semibold text-slate-900">Compatibility Checker</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            iconName="X"
            className="lg:hidden"
          />
        </div>

        {/* Crane Information Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Manufacturer *
            </label>
            <select
              value={craneInfo.manufacturer}
              onChange={(e) => handleInputChange('manufacturer', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            >
              <option value="">Select manufacturer</option>
              {manufacturers.map((manufacturer) => (
                <option key={manufacturer} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Model *"
            type="text"
            placeholder="e.g., 999F, LR 1300"
            value={craneInfo.model}
            onChange={(e) => handleInputChange('model', e.target.value)}
          />

          <Input
            label="Year *"
            type="number"
            placeholder="e.g., 2018"
            value={craneInfo.year}
            onChange={(e) => handleInputChange('year', e.target.value)}
            min="1990"
            max={new Date().getFullYear()}
          />

          <Input
            label="Serial Number (Optional)"
            type="text"
            placeholder="For precise compatibility"
            value={craneInfo.serialNumber}
            onChange={(e) => handleInputChange('serialNumber', e.target.value)}
            description="Helps identify specific part variations"
          />
        </div>

        {/* Check Button */}
        <Button
          variant="default"
          fullWidth
          onClick={handleCompatibilityCheck}
          disabled={!isFormValid || isChecking}
          loading={isChecking}
          iconName="Search"
          iconPosition="left"
          className="bg-blue-800 hover:bg-blue-900 mb-6"
        >
          {isChecking ? 'Checking Compatibility...' : 'Check Compatible Parts'}
        </Button>

        {/* Results */}
        {results && (
          <div className="space-y-4">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-800">
                  {results.compatibleParts.toLocaleString()}
                </div>
                <div className="text-sm text-blue-600">Compatible Parts</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-800">
                  {results.criticalParts}
                </div>
                <div className="text-sm text-orange-600">Critical Parts</div>
              </div>
            </div>

            {/* Maintenance Schedule */}
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-slate-600" />
                <span className="text-sm font-medium text-slate-900">Next Maintenance</span>
              </div>
              <div className="text-sm text-slate-700">
                <div className="font-medium">{results.maintenanceSchedule.type}</div>
                <div className="text-slate-500">Due: {results.maintenanceSchedule.next}</div>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-3">Recommended Parts</h4>
              <div className="space-y-2">
                {results.recommendations.map((rec) => (
                  <div key={rec.id} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(rec.priority)}`}>
                      {rec.priority.toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-900">{rec.name}</div>
                      <div className="text-xs text-slate-500 mb-1">{rec.partNumber}</div>
                      <div className="text-xs text-slate-600">{rec.reason}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Plus"
                      className="flex-shrink-0"
                    >
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-4 border-t border-slate-200">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                className="flex-1"
              >
                Export Report
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="flex-1"
              >
                Schedule Service
              </Button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex items-start space-x-3">
            <Icon name="HelpCircle" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-1">Need Help?</h4>
              <p className="text-sm text-slate-600 mb-2">
                Our technical experts can help identify the right parts for your crane.
              </p>
              <Button
                variant="link"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                className="text-blue-800 p-0"
              >
                Contact Technical Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompatibilityChecker;