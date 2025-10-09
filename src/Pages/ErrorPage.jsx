import { useRouteError, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import error404 from '../assets/error-404.png';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
                <div className="max-w-2xl w-full text-center">
                    {/* Error Image */}
                    <div className="mb-8">
                        <img 
                            src={error404} 
                            alt="404 Error" 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>

                    {/* Error Message */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Oops, page not found!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        The page you are looking for is not available.
                    </p>

                    {/* Error Details (if available) */}
                    {error && error.statusText && (
                        <p className="text-sm text-gray-500 mb-8">
                            Error: {error.statusText || error.message}
                        </p>
                    )}

                    {/* Go Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        Go Back!
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPage;