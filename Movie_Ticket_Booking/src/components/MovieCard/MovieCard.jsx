import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import timeformat from '../../../lib/timeformat';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <div
            className="
        flex flex-col justify-between p-3 bg-gray-800
        rounded-2xl
        hover:-translate-y-1
        transform
        transition duration-300
        w-64
        cursor-pointer
      "
        >
            {/* Movie Poster */}
            <img
                onClick={() => {
                    navigate(`/movie/${movie._id}`);
                    window.scrollTo(0, 0);
                }}
                src={movie.backdrop_path}
                alt={movie.title}
                className="
          rounded-lg
          h-52 w-full
          object-cover
          object-bottom
          mb-2
        "
            />

            {/* Movie Title */}
            <p className="truncate font-semibold text-white">{movie.title}</p>

            {/* Movie Meta Info */}
            <p className="text-sm text-gray-400">
                {new Date(movie.release_date).getFullYear()} •{' '}
                {movie.genres.slice(0, 2).map((g) => g.name).join(' | ')} •{' '}
                {timeformat(movie.runtime)}
            </p>

            {/* Rating */}
            <p className="text-sm text-yellow-400 mt-1">⭐ {movie.vote_average.toFixed(1)}</p>

            <div>
                <div className='flex items-center justify-between mt-4 pb-3'>
                    <button
                        onClick={() => {
                            navigate(`/movie/${movie._id}`);
                            window.scrollTo(0, 0);
                        }}
                        className="
      mt-3
      inline-flex items-center
      bg-[#F84565] hover:bg-[#D63854]
      text-white
      px-3 py-2
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
                        Buy Tickets
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

            </div>
        </div>
    );
};

export default MovieCard;
