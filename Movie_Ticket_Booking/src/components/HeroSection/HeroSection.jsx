import React from "react";
import backgroundImage from "../../assets/backgroundImage.png";
import { assets } from "../../assets/assets";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
  <div
  style={{ backgroundImage: `url(${backgroundImage})` }}
  className="
    flex flex-col items-start justify-center
    gap-4
    px-4 sm:px-6 md:px-12 lg:px-36
    min-h-screen
    bg-cover bg-center bg-no-repeat
    text-white
  "
>

      {/* Logo */}
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className="w-24 sm:w-28 md:w-32 lg:w-36"
      />

      {/* Title */}
      <h1 className="
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl
        font-semibold
        leading-snug sm:leading-tight md:leading-tight
      ">
        Guardians <br /> of the Galaxy
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-3 text-gray-300 text-xs sm:text-sm md:text-base">
        <span>Action | Adventure | Sci-Fi</span>

        <div className="flex items-center gap-1">
          <Calendar size={14} /> 2025
        </div>

        <div className="flex items-center gap-1">
          <Clock size={14} /> 2h 30m
        </div>
      </div>

      {/* Description */}
      <p className="max-w-full sm:max-w-md text-gray-300 text-sm sm:text-base md:text-lg">
        A group of intergalactic criminals must pull together to stop a fanatical
        warrior with plans to purge the universe.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/movie")}
        className="
          mt-4 sm:mt-6
          inline-flex items-center
          bg-[#F84565] hover:bg-[#D63854]
          text-white
          px-4 sm:px-5 py-2 sm:py-2.5
          rounded-full
          text-sm sm:text-base
          transition
          duration-300
          ease-in-out
          group
        "
      >
        Explore Movies
        <ArrowRight
          size={14}
          className="
            ml-2
            transition-transform
            duration-300
            ease-in-out
            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
};

export default HeroSection;
