
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useAppsData from '../Hooks/useAppsData';
import demoApp1 from '../assets/demo-app1.webp';
import demoApp2 from '../assets/demo-app2.webp';
import demoApp3 from '../assets/demo-app3.webp';
import demoApp4 from '../assets/demo-app4.webp';
import demoApp5 from '../assets/demo-app5.webp';
import demoApp6 from '../assets/demo-app6.webp';
import { toast } from 'react-toastify';
import iconDownload from '../assets/icon-downloads.png';
import iconRating from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, loading } = useAppsData();
    const [isInstalled, setIsInstalled] = useState(false);

    // Image mapping
    const imageMap = {
        '/src/assets/demo-app1.webp': demoApp1,
        '/src/assets/demo-app2.webp': demoApp2,
        '/src/assets/demo-app3.webp': demoApp3,
        '/src/assets/demo-app4.webp': demoApp4,
        '/src/assets/demo-app5.webp': demoApp5,
        '/src/assets/demo-app6.webp': demoApp6,
    };

    // Format downloads function
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000) {
            return `${(downloads / 1000000).toFixed(0)}M`;
        }
        return downloads;
    };

    // Format reviews
    const formatReviews = (reviews) => {
        if (reviews >= 1000) {
            return `${(reviews / 1000).toFixed(0)}K`;
        }
        return reviews;
    };

    // Find the app
    const app = products.find(app => app.id === parseInt(id));

    const handleInstall = () => {
        setIsInstalled(true);
        
        // Save to localStorage
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        const appToInstall = {
            id: app.id,
            title: app.title,
            image: app.image,
            downloads: app.downloads,
            ratingAvg: app.ratingAvg,
            size: app.size
        };
        
        // Check if app is already installed
        const isAlreadyInstalled = installedApps.some(installed => installed.id === app.id);
        if (!isAlreadyInstalled) {
            installedApps.push(appToInstall);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
        }
        
        toast.success('App installed successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-semibold">Loading app details...</p>
                </div>
            </div>
        );
    }

    if (!app) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">App Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">The app you are looking for does not exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/apps')}
                        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                        Browse All Apps
                    </button>
                </div>
            </div>
        );
    }

    // Prepare chart data from ratings
    const chartData = app.ratings.map(rating => ({
        name: rating.name,
        count: rating.count
    })).reverse(); // Reverse to show 5 star at top

    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* App Information Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* App Image */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                                <img
                                    src={imageMap[app.image] || demoApp1}
                                    alt={app.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* App Details */}
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                {app.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                Developed by <span className="text-purple-600 font-semibold">{app.companyName}</span>
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                {/* Downloads */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={iconDownload} alt="Downloads" className="w-6 h-6" />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Downloads</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {formatDownloads(app.downloads)}
                                    </p>
                                </div>

                                {/* Average Ratings */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={iconRating} alt="Average Ratings" className="w-6 h-6" />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Average Ratings</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {app.ratingAvg}
                                    </p>
                                </div>

                                {/* Total Reviews */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={iconReview} alt="Total Reviews" className="w-6 h-6" />
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Total Reviews</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {formatReviews(app.reviews)}
                                    </p>
                                </div>
                            </div>

                            {/* Install Button */}
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`w-full sm:w-auto px-8 py-3 rounded font-semibold text-white transition-all duration-200 ${
                                    isInstalled
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-500 hover:bg-green-600 hover:shadow-lg'
                                }`}
                            >
                                {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ratings Chart Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ratings</h2>
                    
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#F97316" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Description Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Description</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {app.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;