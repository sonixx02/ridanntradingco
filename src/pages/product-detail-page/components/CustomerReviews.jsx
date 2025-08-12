import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' },
    { value: 'verified', label: 'Verified Purchase' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}
      />
    ));
  };

  const handleHelpful = (reviewId) => {
    console.log('Marked helpful:', reviewId);
  };

  const handleReport = (reviewId) => {
    console.log('Reported review:', reviewId);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
          <Icon name="MessageSquare" size={24} className="text-blue-800" />
          <span>Customer Reviews</span>
        </h3>
      </div>

      {/* Rating Summary */}
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-3 sm:space-y-0">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">{averageRating}</div>
            <div className="flex items-center justify-center space-x-1 mt-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-sm text-slate-600 mt-1">{totalReviews} reviews</div>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = reviews.filter(r => r.rating === stars).length;
              const percentage = (count / totalReviews) * 100;
              
              return (
                <div key={stars} className="flex items-center space-x-3 mb-2">
                  <span className="text-sm text-slate-600 w-8">{stars}</span>
                  <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                  <div className="flex-1 bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sort and Filter Controls */}
      <div className="p-4 sm:p-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">Filter by</label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-slate-200">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 sm:p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-slate-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-slate-900">{review.author}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-slate-600">{review.date}</span>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <h5 className="font-medium text-slate-900 mb-2">{review.title}</h5>
                <p className="text-slate-700 mb-4">{review.content}</p>

                {/* Technical Details */}
                {review.technicalDetails && (
                  <div className="mb-4 p-2 sm:p-3 bg-slate-50 rounded-lg">
                    <h6 className="text-xs sm:text-sm font-medium text-slate-900 mb-1 sm:mb-2">Technical Performance</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-600">Installation: </span>
                        <span className="font-medium text-slate-900">{review.technicalDetails.installation}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Durability: </span>
                        <span className="font-medium text-slate-900">{review.technicalDetails.durability}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Fit: </span>
                        <span className="font-medium text-slate-900">{review.technicalDetails.fit}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Crane Model Used */}
                {review.craneModel && (
                  <div className="mb-4 text-sm">
                    <span className="text-slate-600">Used on: </span>
                    <span className="font-medium text-slate-900">{review.craneModel}</span>
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-900"
                  >
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button
                    onClick={() => handleReport(review.id)}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50">
        <div className="text-center">
          <Button
            variant="outline"
            iconName="Edit"
            iconPosition="left"
            className="border-blue-300 text-blue-800 hover:bg-blue-50"
          >
            Write a Review
          </Button>
          <p className="text-sm text-slate-600 mt-2">
            Share your experience with this part to help other professionals
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;