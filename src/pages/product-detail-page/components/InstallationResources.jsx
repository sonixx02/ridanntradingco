import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
const InstallationResources = ({ resources }) => {
  const [activeTab, setActiveTab] = useState('guides');

  const tabs = [
    { id: 'guides', label: 'Installation Guides', icon: 'FileText' },
    { id: 'videos', label: 'Video Tutorials', icon: 'Play' },
    { id: 'safety', label: 'Safety Guidelines', icon: 'Shield' },
    { id: 'tools', label: 'Required Tools', icon: 'Wrench' }
  ];

  const handleDownload = (resource) => {
    console.log('Downloading:', resource.title);
  };

  const handleVideoPlay = (video) => {
    console.log('Playing video:', video.title);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
          <Icon name="BookOpen" size={24} className="text-blue-800" />
          <span>Installation Resources</span>
        </h3>
        <p className="text-slate-600 mt-2">
          Comprehensive guides, videos, and safety information for proper installation.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-200 overflow-x-auto">
        <nav className="flex space-x-4 sm:space-x-8 px-2 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-blue-800 text-blue-800' :'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 sm:p-6">
        {/* Installation Guides Tab */}
        {activeTab === 'guides' && (
          <div className="space-y-4">
            {resources.guides.map((guide, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{guide.title}</h4>
                    <p className="text-sm text-slate-600">{guide.description}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-slate-500">PDF • {guide.size}</span>
                      <span className="text-xs text-slate-500">Updated {guide.updated}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  onClick={() => handleDownload(guide)}
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Video Tutorials Tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {resources.videos.map((video, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200">
                <div className="relative aspect-video bg-slate-100">
                  <Image
                    src={video.thumbnail || '/assets/images/video-placeholder.png'}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center bg-slate-100">
                        <Icon name="Video" size={48} className="text-slate-400" />
                      </div>
                    }
                  />
                  <button
                    onClick={() => handleVideoPlay(video)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-slate-900 ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-slate-900">{video.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{video.description}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-slate-500">{video.views} views</span>
                    <span className="text-xs text-slate-500">Added {video.added}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Safety Guidelines Tab */}
        {activeTab === 'safety' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800">Critical Safety Warning</h4>
                  <p className="text-sm text-red-700 mt-1">
                    Always follow proper lockout/tagout procedures and ensure crane is completely de-energized before beginning installation.
                  </p>
                </div>
              </div>
            </div>

            {resources.safety.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-blue-800 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">{item.title}</h4>
                    <ul className="mt-2 space-y-1">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-sm text-slate-700 flex items-start space-x-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Required Tools Tab */}
        {activeTab === 'tools' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {resources.tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg">
                  <Icon name="Tool" size={20} className="text-slate-600" />
                  <div>
                    <h4 className="font-medium text-slate-900">{tool.name}</h4>
                    <p className="text-sm text-slate-600">{tool.specification}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Tool Rental Available</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Specialized tools can be rented through our equipment rental program. Contact customer service for availability and pricing.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-blue-800 border-blue-300 hover:bg-blue-100"
                  >
                    Contact Rental Department
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationResources;