import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    ` px-4 py-2 rounded-full text-sm transition
     ${
       isActive
         ? "bg-gray-800 text-white"
         : "text-gray-400 hover:text-white"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-5 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-semibold text-white">
          <span className="text-[#F84565]">Q</span>uickShow
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 bg-[#14141] px-2 py-1 rounded-full">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/movie" className={navLinkClass}>Movies</NavLink>
          <NavLink to="/theatres" className={navLinkClass}>Theatres</NavLink>
          <NavLink to="/releases" className={navLinkClass}>Releases</NavLink>
          <NavLink to="/favorite" className={navLinkClass}>Favorite</NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={20} />
          </button>

          {/* Login (hide on very small if needed) */}
          <button className="hidden sm:block bg-[#F84565] hover:bg-[#D63854] text-white text-sm px-5 py-2 rounded-full transition">
            Log in
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0b0b] border-t border-gray-800">
          <div className="px-6 py-4 flex justify-between items-center">
            <span className="text-white font-semibold">Menu</span>
            <button onClick={() => setOpen(false)}>
              <X className="text-gray-400 hover:text-white" />
            </button>
          </div>

          <nav className="px-6 pb-4 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/movie" className={navLinkClass}>
              Movies
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/theatres" className={navLinkClass}>
              Theatres
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/releases" className={navLinkClass}>
              Releases
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/favorite" className={navLinkClass}>
              Favorite
            </NavLink>

            <button className="w-full mt-3 bg-[#F84565] hover:bg-[#D63854] text-white py-2 rounded-lg">
              Log in
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
