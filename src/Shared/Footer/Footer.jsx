import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#131313] text-neutral-content">
                <aside>
                    <FaTwitter size={50} color="#b5b2b6" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://twitter.com' target='blank'><FaTwitter size={24} color="#b5b2b6" /></a>
                        <a href='https://youtube.com' target='blank'><FaYoutube size={24} color="#b5b2b6" /></a>
                        <a href='https://facebook.com' target='blank'><FaFacebook size={24} color="#b5b2b6" /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
