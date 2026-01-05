import React, { useState, useEffect } from 'react'
import { dummyShowsData } from '../assets/assets'
import Title from './Title'
import { CheckIcon, StarIcon } from 'lucide-react'
import { kConveter } from '../../lib/kConverter'

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [nowPlayingMovies, setnowPlayingMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [dateTimeSelection, setDateTimeSelection] = useState({})
  const [dateTimeInput, setDateTimeInput] = useState('')
  const [showPrice, setShowPrice] = useState()

  const fetchNowPlayingMovies = async () => {
    setnowPlayingMovies(dummyShowsData)
  }

  const handelDateTimeAdd = () => {
    if (!dateTimeInput) return null;

    const [date, time] = dateTimeInput.split('T')
    if (!date || !time) return null;

    setDateTimeSelection((prev) => {
      const times = prev[date] || []
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] }  // fix here: push time into array
      }
      return prev
    })

    setDateTimeInput('') // clear input after adding
  }

  const handelRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const times = (prev[date] || []).filter(t => t !== time)
      const copy = { ...prev }
      if (times.length > 0) copy[date] = times
      else delete copy[date]
      return copy
    })
  }

  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1='Add' text2='Shows' />
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
      <div className='overflow-x-auto pb-4'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max'>
          {nowPlayingMovies.map((movie) => (
            <div key={movie.id} className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40
  hover:-translate-y-1 transition duration-300`} onClick={() => setSelectedMovie(movie.id)}>
              <div className='relative ronded-lg overflow-hidden'>
                <img src={movie.poster_path} alt="" className='w-full object-cover brightness-90' />
                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
                  <p>
                    <StarIcon className='w-4 h-4 text-yellow-400 fill-amber-400' />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className='text-gray-300'>
                    {kConveter(movie.vote_count)} Votes
                  </p>
                </div>
              </div>
              {selectedMovie === movie.id && (
                <div className="absolute top-2 right-2 flex items-center justify-center bg-[#ff042e] h-6 w-6 rounded">
                  <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              )}
              <p className='font-medium truncate'>{movie.title}</p>
              <p className='text-gray-400 text-sm'>{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Show Price Input  */}
      <div className='mt-8'>
        <label className='block text-sm font-medium mb-2 '>Show Price</label>
        <div className='inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md'>
          <p className='text-gray-400 text-sm'>{currency}</p>
          <input
            type="number"
            min={0}
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder='Enter show price'
            className='outline-none bg-gray-900 text-white px-2 py-1 rounded w-32'
          />
        </div>
      </div>

      {/* Date & Time Section */}
      <div className='mt-6'>
        <label className='block text-sm font-medium mb-2' >Select Date and Time</label>
        <div className='inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg'>
          <input type="datetime-local" value={dateTimeInput} onChange={(e) => setDateTimeInput(e.target.value)} className='outline-none rounded-md' />
          <button onClick={handelDateTimeAdd}
            className='bg-primary/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer'
          >Add Time</button>
        </div>

        {/* Display added date/time */}
        <div className='mt-3'>
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date} className='mt-2 p-3 bg-gray-800 rounded-lg'>
              <p className='font-medium text-white'>{date}</p>
              <div className='flex gap-2 flex-wrap mt-1'>
                {times.map((t) => (
                  <div key={t} className='px-3 py-1 bg-gray-700 text-white rounded-full flex items-center gap-2'>
                    <span className='text-sm'>{t}</span>
                    <button onClick={() => handelRemoveTime(date, t)} className='text-red-400 text-xs'>X</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <button
          className='bg-[#ff042e] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition'
          onClick={() => console.log({ selectedMovie, showPrice, dateTimeSelection })}
        >
          Add Show
        </button>
      </div>

    </>
  ) : (
    <div>
      Loading...
    </div>
  )
}

export default AddShows
