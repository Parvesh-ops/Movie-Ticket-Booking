import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../assets/assets.js'
import MovieCard from '../components/MovieCard/MovieCard'
import { Link } from 'react-router-dom'

const Movie = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('selectedLocation') || 'null')
      setSelectedLocation(stored)
    } catch (e) {
      setSelectedLocation(null)
    }
  }, [])

  if (!selectedLocation) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-xl font-semibold mb-4">Please choose your location</h2>
        <p className="text-sm text-gray-400 mb-6">Select a theater location to view available movies near you.</p>
        <Link to="/theatres" className="px-6 py-2 bg-[#F84565] rounded-full text-white">Choose Location</Link>
      </div>
    )
  }

  return dummyShowsData.length > 0 ? (
    <div className='relative my-20 mb-60 px-6 md:px-16 llg:px-40 xl:px-44
    overflow-hidden min-h-[80vh]'>
      <h1 className='text-lg font-medium my-4'>Now Showing — {selectedLocation.location || selectedLocation.name}</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16'>
        {dummyShowsData.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <h1 className="font-bold text-center text-2xl mt-10">
        No Movies Available
      </h1>
    </div>
  )
}

export default Movie
