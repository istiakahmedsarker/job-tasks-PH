import { FaHome, FaUsers } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
    const [activeLink, setActiveLink] = useState("/dashboard/todos");

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    const activeStyle = {
        backgroundColor: "#f7c667",
        color: "black",
    };

    return (
        <div className="flex">
            <div className="w-64 min-h-screen">
                <ul className="menu p-4">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={`text-[#b5b2b6]`}
                            style={activeLink === "/dashboard/todos" ? activeStyle : null}
                            onClick={() => handleNavLinkClick("/dashboard/todos")}
                        >
                            <FaHome />
                            TODO List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/ongoingList"
                            className={`text-[#b5b2b6]`}
                            style={activeLink === "/dashboard/ongoingList" ? activeStyle : null}
                            onClick={() => handleNavLinkClick("/dashboard/ongoingList")}
                        >
                            <FaUsers />
                            Ongoing List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/completedList"
                            className={`text-[#b5b2b6]`}
                            style={activeLink === "/dashboard/completedList" ? activeStyle : null}
                            onClick={() => handleNavLinkClick("/dashboard/completedList")}
                        >
                            <HiSpeakerphone />
                            Completed List
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
