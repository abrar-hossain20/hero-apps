import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import demoApp1 from "../assets/demo-app1.webp";
import demoApp2 from "../assets/demo-app2.webp";
import demoApp3 from "../assets/demo-app3.webp";
import demoApp4 from "../assets/demo-app4.webp";
import demoApp5 from "../assets/demo-app5.webp";
import demoApp6 from "../assets/demo-app6.webp";
import iconDownload from '../assets/icon-downloads.png';
import iconRating from '../assets/icon-ratings.png';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // Image mapping
  const imageMap = {
    "/src/assets/demo-app1.webp": demoApp1,
    "/src/assets/demo-app2.webp": demoApp2,
    "/src/assets/demo-app3.webp": demoApp3,
    "/src/assets/demo-app4.webp": demoApp4,
    "/src/assets/demo-app5.webp": demoApp5,
    "/src/assets/demo-app6.webp": demoApp6,
  };

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("installedApps");
    if (stored) {
      setInstalledApps(JSON.parse(stored));
    }
  }, []);

  // Format downloads
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(0)}M`;
    }
    return downloads;
  };

  // Handle uninstall
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success("App uninstalled successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Sort apps
  const getSortedApps = () => {
    let sorted = [...installedApps];

    switch (sortBy) {
      case "size":
        return sorted.sort((a, b) => b.size - a.size);
      case "rating":
        return sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
      case "downloads":
        return sorted.sort((a, b) => b.downloads - a.downloads);
      default:
        return sorted;
    }
  };

  const sortedApps = getSortedApps();

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Installed Apps
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Count and Sort Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {sortedApps.length} Apps Found
          </h2>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white cursor-pointer"
            >
              <option value="default">Sort By Size</option>
              <option value="size">Size (Largest First)</option>
              <option value="rating">Rating (Highest First)</option>
              <option value="downloads">Downloads (Most First)</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Installed Apps List */}
        {sortedApps.length > 0 ? (
          <div className="space-y-4">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  {/* Left Side - App Info */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* App Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={imageMap[app.image] || demoApp1}
                        alt={app.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* App Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">
                        {app.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        {/* Downloads */}
                        <div className="flex items-center gap-1.5">
                          <img src={iconDownload} alt="Downloads" className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">
                            {formatDownloads(app.downloads)}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <img src={iconRating} alt="Rating" className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-semibold text-orange-500">
                            {app.ratingAvg}
                          </span>
                        </div>

                        {/* Size */}
                        <span className="text-sm text-gray-600">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Uninstall Button */}
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition-colors duration-200"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <svg
              className="w-20 h-20 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Installed Apps
            </h3>
            <p className="text-gray-600 mb-6">
              You haven't installed any apps yet.
            </p>
            <a
              href="/apps"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Browse Apps
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
