import React from 'react';
import { Link } from 'react-router';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const Card = ({ id, title, image, downloads, rating }) => {
    return (
        <Link 
            to={`/apps/${id}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-sm block"
        >
            {/* Image Section */}
            <div className="relative aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                {image ? (
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {title || 'App Title'}
                </h3>

                {/* Stats Row */}
                <div className="flex items-center justify-between">
                    {/* Downloads */}
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg">
                        <img 
                            src={iconDownloads} 
                            alt="Downloads" 
                            className="w-4 h-4"
                        />
                        <span className="text-green-600 font-semibold text-sm">
                            {downloads || '0M'}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-lg">
                        <img 
                            src={iconRatings} 
                            alt="Rating" 
                            className="w-5 h-5"
                        />
                        <span className="text-orange-500 font-semibold text-sm">
                            {rating || '5'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;