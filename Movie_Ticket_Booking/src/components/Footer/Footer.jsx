import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-gray-400 mt-20">
      <div className="max-w-9xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-[#F84565]">Q</span>uickShow
          </h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-6 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-white">Privacy policy</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in touch</h3>
          <p className="text-sm mb-2">+1-212-456-7890</p>
          <p className="text-sm">contact@example.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        Copyright 2025 © Movie-Ticket-Booking-App. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;

