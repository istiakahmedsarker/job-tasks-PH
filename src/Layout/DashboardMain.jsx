import { Outlet } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard/Dashboard";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const DashboardMain = () => {
    return (
        <div>
            <Navbar />
            <div className="flex bg-[#131313]">
                <div data-aos="fade-right"  className="w-64 min-h-screen">
                    <Dashboard />
                </div>
            <Outlet></Outlet>

            </div>
            <Footer />
        </div>
    );
};

export default DashboardMain;