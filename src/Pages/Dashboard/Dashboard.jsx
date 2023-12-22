import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Todos from "../Todos/Todos";

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
                        {/* <NavLink
                            to="/dashboard"
                            className={`text-[#b5b2b6] flex items-center`}
                            style={activeLink === "/dashboard/todos" ? activeStyle : null}
                            onClick={() => handleNavLinkClick("/dashboard/todos")}
                        >
                            <FaHome className="mr-2" />
                            <span className="hidden lg:block">TODO List</span>
                        </NavLink> */}
                        <Todos/>
        </div>
    );
};

export default Dashboard;
