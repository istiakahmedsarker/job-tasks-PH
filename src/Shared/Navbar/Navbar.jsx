import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <>
            <li>
                <Link to="/" className="font-bold normal-case text-xl hover:bg-white onClick:bg-white">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/todos" className="font-bold normal-case text-xl hover:bg-white onClick:bg-white">
                    Todos
                </Link>
            </li>
            <li>
                <Link to="/completed" className="font-bold normal-case text-xl hover:bg-white onClick:bg-white">
                    Completed
                </Link>
            </li>
        </>
    );
};
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Menus />
                        </ul>
                    </div>
                    <Link to='/' className="font-bold normal-case text-3xl">GLASSES</Link>
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">Farhan</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;