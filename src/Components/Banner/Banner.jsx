import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    const backgroundImageUrl = 'https://i.ibb.co/0DLcH9S/Capture.png';

    return (
        <section
            className="relative h-[100vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div   className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-8 text-white">
                <div data-aos="fade-up">

                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#b5b2b6]">Welcome to Our Website Daily Docket</h1>
                <p className="text-lg md:text-xl mb-6 text-[#b5b2b6]">Elevate Your Productivity: Your Ultimate Todo Solution</p>
                <Link to='/dashboard' className="px-6 py-3 bg-[#131313] rounded-lg text-[#b5b2b6] hover:bg-[#f7c667] hover:text-black">
                    Let's Explore
                </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
