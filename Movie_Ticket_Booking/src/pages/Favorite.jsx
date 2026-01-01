import React from 'react'
import  { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'
import { getFavorites } from '../../lib/favorite';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return favorites.length > 0 ? (
    <div className='relative my-20 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
    overflow-hidden min-h-[80vh]'>

      <h1 className='text-lg font-medium my-4'>
        Your Favorite Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

    </div>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <h1 className="font-bold text-center text-2xl mt-10">
        No Favorite Movies
      </h1>
    </div>
  );
};

export default Favorite;

