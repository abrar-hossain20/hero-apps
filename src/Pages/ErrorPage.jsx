import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div>
            <Navbar></Navbar>
            {error.message}
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;