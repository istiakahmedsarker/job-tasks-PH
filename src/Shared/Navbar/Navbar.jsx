import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

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
                    to="/todos"
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
    return (
        <>
            <div className="navbar bg-[#131313]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                        className={clsx(
                            "font-bold",
                            "normal-case",
                            "text-3xl",
                            "text-[#b5b2b6]",
                            "transition-colors duration-300",
                            "hover:bg-[#f7c667]"
                        )}
                    >
                        GLASSES
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menus />
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/y0yrnYQ/1681283571946.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <button className="btn btn-sm btn-ghost">Farhan</button>
                            </li>
                            <li>
                                <button className="btn btn-sm btn-ghost">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
