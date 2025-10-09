import React from 'react';
import { Link } from 'react-router';
import heroImage from '../assets/hero.png';
import Card from '../Components/Card';
import googlePlay from '../assets/googlePlay.png';
import appleStore from '../assets/appleApp.png';
import useAppsData from '../Hooks/useAppsData';
import demoApp1 from '../assets/demo-app1.webp';
import demoApp2 from '../assets/demo-app2.webp';
import demoApp3 from '../assets/demo-app3.webp';
import demoApp4 from '../assets/demo-app4.webp';
import demoApp5 from '../assets/demo-app5.webp';
import demoApp6 from '../assets/demo-app6.webp';

const Home = () => {
    const { products, loading } = useAppsData();

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
            return `${(downloads / 1000000).toFixed(1)}M`;
        }
        return downloads;
    };

    // Get trending apps with formatted data
    const trendingApps = products.slice(0, 8).map(app => ({
        ...app,
        image: imageMap[app.image] || demoApp1,
        downloads: formatDownloads(app.downloads)
    }));

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-semibold">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white pt-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Center Content */}
                    <div className="text-center mb-8 lg:mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                            We Build{' '}
                            <span 
                                style={{
                                    background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Productive
                            </span>{' '}
                            Apps
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                            Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        
                        {/* Store Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a 
                                href="https://play.google.com" 
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-purple-500 transition-colors duration-200 w-full sm:w-auto justify-center"
                            >
                                <img className='h-6 w-auto object-contain' src={googlePlay} alt="Google Play" />
                                <span className="font-semibold text-gray-900">Google Play</span>
                            </a>
                            <a 
                                href="https://apps.apple.com" 
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-purple-500 transition-colors duration-200 w-full sm:w-auto justify-center"
                            >
                                <img className='h-6 w-auto object-contain' src={appleStore} alt="App Store" />
                                <span className="font-semibold text-gray-900">App Store</span>
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full max-w-4xl mx-auto">
                        <img 
                            src={heroImage} 
                            alt="Hero App" 
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section 
                className="py-12 sm:py-16 text-white"
                style={{
                    background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
                        Trusted By Millions, Built For You
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Total Downloads */}
                        <div className="text-center">
                            <p className="text-sm sm:text-base text-white/80 mb-2">Total Downloads</p>
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">29.6M</h3>
                            <p className="text-xs sm:text-sm text-white/70">41% More Than Last Month</p>
                        </div>

                        {/* Total Reviews */}
                        <div className="text-center">
                            <p className="text-sm sm:text-base text-white/80 mb-2">Total Reviews</p>
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">906K</h3>
                            <p className="text-xs sm:text-sm text-white/70">38% More Than Last Month</p>
                        </div>

                        {/* Active Apps */}
                        <div className="text-center">
                            <p className="text-sm sm:text-base text-white/80 mb-2">Active Apps</p>
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">132+</h3>
                            <p className="text-xs sm:text-sm text-white/70">21 More Than Last Month</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Apps Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Trending Apps
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </div>

                    {/* Apps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                        {trendingApps.map((app) => (
                            <Card
                                key={app.id}
                                id={app.id}
                                title={app.title}
                                image={app.image}
                                downloads={app.downloads}
                                rating={app.ratingAvg}
                            />
                        ))}
                    </div>

                    {/* Show All Button */}
                    <div className="text-center">
                        <Link
                            to="/apps"
                            className="inline-block px-8 py-3 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                            style={{
                                background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
                            }}
                        >
                            Show All
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;