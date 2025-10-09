import { useState } from "react";
import useAppsData from "../Hooks/useAppsData";
import Card from "../Components/Card";
import demoApp1 from "../assets/demo-app1.webp";
import demoApp2 from "../assets/demo-app2.webp";
import demoApp3 from "../assets/demo-app3.webp";
import demoApp4 from "../assets/demo-app4.webp";
import demoApp5 from "../assets/demo-app5.webp";
import demoApp6 from "../assets/demo-app6.webp";

const AllApps = () => {
  const { products, loading } = useAppsData();
  const [searchTerm, setSearchTerm] = useState("");

  // Image mapping
  const imageMap = {
    "/src/assets/demo-app1.webp": demoApp1,
    "/src/assets/demo-app2.webp": demoApp2,
    "/src/assets/demo-app3.webp": demoApp3,
    "/src/assets/demo-app4.webp": demoApp4,
    "/src/assets/demo-app5.webp": demoApp5,
    "/src/assets/demo-app6.webp": demoApp6,
  };

  // Format downloads function
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    return downloads;
  };

  // Map all apps with formatted data
  const allApps = products.map((app) => ({
    ...app,
    image: imageMap[app.image] || demoApp1,
    downloads: formatDownloads(app.downloads),
  }));

  // Filter apps based on search term
  const filteredApps = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white pb-6 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our All Applications
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              ({filteredApps.length}) Apps Found
            </h2>

            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search Apps"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Apps Grid */}
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No apps found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllApps;
