import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="bg-[#1c1c1c] text-white px-10 py-3 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-[#f84464]">
                    MovieTime
                </h1>

                <input
                    type="text"
                    placeholder="Search movies, cinemas..."
                    className="w-72 px-4 py-2 rounded-md text-gray-400 outline-offset-2"
                />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">


                <nav className="flex items-center gap-4 text-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-semibold transition
       hover:underline hover:underline-offset-4
       hover:decoration-[#f84464]
       ${isActive
                                ? "underline underline-offset-4 decoration-[#f84464] font-bold"
                                : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            `font-semibold transition
       hover:underline hover:underline-offset-4
       hover:decoration-[#f84464]
       ${isActive
                                ? "underline underline-offset-4 decoration-[#f84464] font-bold"
                                : ""
                            }`
                        }
                    >
                        Movies
                    </NavLink>

                    <NavLink
                        to="/theaters"
                        className={({ isActive }) =>
                            `font-semibold transition
       hover:underline hover:underline-offset-4
       hover:decoration-[#f84464]
       ${isActive
                                ? "underline underline-offset-4 decoration-[#f84464] font-bold"
                                : ""
                            }`
                        }
                    >
                        Theaters
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `font-semibold transition
       hover:underline hover:underline-offset-4
       hover:decoration-[#f84464]
       ${isActive
                                ? "underline underline-offset-4 decoration-[#f84464] font-bold"
                                : ""
                            }`
                        }
                    >
                        Favorites
                    </NavLink>

                    <NavLink
                        to="/release"
                        className={({ isActive }) =>
                            `font-semibold transition
       hover:underline hover:underline-offset-4
       hover:decoration-[#f84464]
       ${isActive
                                ? "underline underline-offset-4 decoration-[#f84464] font-bold"
                                : ""
                            }`
                        }
                    >
                        Release
                    </NavLink>
                </nav>

                <button className="bg-[#f84464] px-5 py-2 rounded-md hover:bg-[#e03a57] transition">
                    Login
                </button>
            </div>
        </header>
    );
};

export default Header;
