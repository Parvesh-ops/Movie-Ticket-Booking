import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyShowsData, dummyDateTimeData } from '../assets/assets'
import { Heart, PlayCircle, StarIcon } from 'lucide-react'
import timeformat from '../../lib/timeformat'

const MovieDetail = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const movie = dummyShowsData.find(m => m._id === id)
    if (!movie) return

    setShow({
      movie,
      dateTime: dummyDateTimeData
    })
  }, [id])

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading...
      </div>
    )
  }

  const { movie } = show

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 lg:px-40 py-16">

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* POSTER */}
        <div className="flex justify-center">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-72 rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="md:col-span-2 flex flex-col gap-5">

          <p className="text-primary uppercase tracking-widest text-sm">
            English
          </p>

          <h1 className="text-4xl font-bold leading-tight max-w-xl">
            {movie.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon size={18} className="text-yellow-400" />
            <span className="text-sm">
              {movie.vote_average.toFixed(1)} IMDb Rating
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            {movie.overview}
          </p>

          {/* META */}
          <p className="text-sm text-gray-400">
            {timeformat(movie.runtime)} ·{" "}
            {movie.genres.map(g => g.name).join(', ')} ·{" "}
            {movie.release_date}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mt-4">

            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
              <PlayCircle size={18} />
              Watch Trailer
            </button>

            <button className="px-6 py-2.5 bg-[#f84565] rounded-xl font-medium hover:bg-[#f83256] transition">
              Buy Tickets
            </button>

            <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition active:scale-95">
              <Heart size={18} />
            </button>

          </div>
        </div>
      </div>

      {/* CAST SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-lg font-semibold mb-6">
          Your Favorite Cast
        </h2>

        <div className="flex gap-6 overflow-hidden pb-2">
          {movie.casts?.map((cast, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px]">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="text-xs text-center">{cast.name}</p>
              <p className="text-[10px] text-gray-400 text-center">
                {cast.character}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default MovieDetail
