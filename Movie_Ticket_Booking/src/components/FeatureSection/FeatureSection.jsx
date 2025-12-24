import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MovieCard from '../MovieCard/MovieCard';
import { dummyShowsData } from '../../assets/assets';


const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between pt-20 pb-10">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>

        <button
          onClick={() => navigate('/movie')}
          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          View All
          <ArrowRight
            size={16}
            className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Movie Cards Grid */}
   <div className="mt-6  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
  {dummyShowsData.slice(0, 8).map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ))}
</div>



      {/* Show More Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movie');
            window.scrollTo(0, 0);
          }}
          className="
            mt-3
            inline-flex justify-center items-center
            bg-[#F84565] hover:bg-[#D63854]
            text-white
            px-5 py-2
            rounded-full
            transition
            duration-300
            ease-in-out
            transform
            hover:-translate-y-1
            hover:shadow-lg
            group
          "
        >
          Show More
          <ArrowRight
            size={16}
            className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </button>
      </div>

    </div>
  );
};

export default FeatureSection;
