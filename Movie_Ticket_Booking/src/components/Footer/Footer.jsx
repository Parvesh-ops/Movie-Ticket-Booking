import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 px-10 py-10">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#f84464]">
            MovieTime
          </h2>
          <p className="text-sm mt-3 leading-relaxed">
            Book movie tickets easily and enjoy the latest movies
            in your favorite cinemas near you.
          </p>
        </div>

        {/* Movies */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Movies
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#f84464] cursor-pointer">Now Showing</li>
            <li className="hover:text-[#f84464] cursor-pointer">Upcoming</li>
            <li className="hover:text-[#f84464] cursor-pointer">Top Rated</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#f84464] cursor-pointer">Help Center</li>
            <li className="hover:text-[#f84464] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#f84464] cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Follow Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#f84464] cursor-pointer">Facebook</li>
            <li className="hover:text-[#f84464] cursor-pointer">Instagram</li>
            <li className="hover:text-[#f84464] cursor-pointer">Twitter</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
        © {new Date().getFullYear()} MovieTime. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
