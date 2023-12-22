import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import useAuth from "../../Hooks/useAuth";

const Menus = () => {
    return (
        <>
            <li>
                <NavLink
                    to="/"
                    exact
                    className={clsx(
                        "font-bold",
                        "normal-case",
                        "text-xl",
                        "text-[#b5b2b6]",
                        "transition-colors duration-300",
                        "hover:bg-[#f7c667]",
                        "hover:text-black"
                    )}
                    activeClassName="bg-[#f7c667]"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={clsx(
                        "font-bold",
                        "normal-case",
                        "text-xl",
                        "text-[#b5b2b6]",
                        "transition-colors duration-300",
                        "hover:bg-[#f7c667]",
                        "hover:text-black"
                    )}
                    activeClassName="bg-[#f7c667]"
                >
                    Todos
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/completed"
                    className={clsx(
                        "font-bold",
                        "normal-case",
                        "text-xl",
                        "text-[#b5b2b6]",
                        "transition-colors duration-300",
                        "hover:bg-[#f7c667]",
                        "hover:text-black"
                    )}
                    activeClassName="bg-[#f7c667]"
                >
                    Completed
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signup"
                    className={clsx(
                        "font-bold",
                        "normal-case",
                        "text-xl",
                        "text-[#b5b2b6]",
                        "transition-colors duration-300",
                        "hover:bg-[#f7c667]",
                        "hover:text-black"
                    )}
                    activeClassName="bg-[#f7c667]"
                >
                    Sign Up
                </NavLink>
            </li>
        </>
    );
};

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await logOut();
        navigate('/');
    };

    return (
        <>
            <div className="navbar bg-[#131313]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#b5b2b6]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <Menus />
                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        className={
                            "font-bold normal-case text-xl ml-2 md:text-3xl text-[#b5b2b6] transition-colors duration-300"
                        }
                    >
                        Daily Docket
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menus />
                    </ul>
                </div>

                <div className="navbar-end">
                    {user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoUrl} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#333333] text-[#b5b2b6] rounded-box w-52">
                                <li className="text-center mb-2">
                                    <a className="btn btn-sm btn-ghost text-[#b5b2b6] hover:bg-[#f7c667] hover:text-black">{user.displayName}</a>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-sm btn-ghost  text-[#b5b2b6] hover:bg-[#f7c667] hover:text-black">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm btn-ghost text-[#b5b2b6]">Login</button>
                        </Link>
                    )}
                </div>

            </div>
        </>
    );
};

export default Navbar;
