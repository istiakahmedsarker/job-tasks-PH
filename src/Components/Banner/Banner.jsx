import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const backgroundImageUrl = 'https://i.ibb.co/0DLcH9S/Capture.png';

    return (
        <section
            className="relative h-[100vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-8 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg md:text-xl mb-6">Explore the amazing features and content we offer!</p>
                <Link to='/dashboard' className="px-6 py-3 bg-yellow-400 text-black rounded-md text-lg hover:bg-yellow-500 transition-colors duration-300">
                    Let's Explore
                </Link>
            </div>
        </section>
    );
};

export default Banner;
