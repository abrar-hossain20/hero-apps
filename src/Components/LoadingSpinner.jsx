import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;