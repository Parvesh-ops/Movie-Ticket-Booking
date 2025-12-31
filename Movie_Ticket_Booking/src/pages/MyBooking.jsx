import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { dummyBookingData } from '../assets/assets'
import timeformat from '../../lib/timeformat'
import { dateFormat } from '../../lib/dateFormat'

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const movieId = location?.state?.movieId

    // merge persisted bookings from localStorage with dummy data
    let persisted = []
    try {
      persisted = JSON.parse(localStorage.getItem('bookings') || '[]')
    } catch (e) {
      persisted = []
    }

    const all = [...dummyBookingData, ...persisted]

    if (movieId) {
      const filtered = all.filter(b => {
        const bm = b?.show?.movie
        return bm?._id === movieId || (bm?.id && bm.id.toString() === movieId.toString()) || b?.show?._id === movieId
      })

      setBookings(filtered)
    } else {
      setBookings(all)
    }

    setIsLoading(false)
  }, [location?.state?.movieId])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading bookings...
      </div>
    )
  }

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        You have no bookings yet.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 lg:px-40 pt-36">
      <h1 className="text-xl font-semibold mb-6">My Bookings</h1>

      <div className="flex flex-col gap-6 max-w-5xl">
        {bookings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between rounded-xl overflow-hidden
            bg-linear-to-r from-[#1a0b10] to-[#2a0f18] border border-white/10"
          >
            {/* LEFT */}
            <div className="flex">
              <img
                src={item.show.movie.poster_path}
                alt={item.show.movie.title}
                className="w-28 md:w-36 h-full object-cover"
              />

              <div className="p-4 flex flex-col">
                <p className="text-lg font-semibold">
                  {item.show.movie.title}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {item.show.movie.runtime
                    ? timeformat(item.show.movie.runtime)
                    : 'Runtime not available'}
                </p>

                <p className="text-sm text-gray-400 mt-auto">
                  {dateFormat(item.show.showDateTime)}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-4 flex flex-col justify-between text-right">
              <div>
                <p className="text-2xl font-semibold">
                ${currency}{item.amount }
                </p>

                {!item.isPaid && (
                  <button onClick={() => navigate('/pay-now', { state: item })}
                    className="mt-2 px-4 py-1.5 bg-[#f84565] rounded-full text-sm font-medium hover:bg-[#f83256] transition">
                    Pay Now
                  </button>
                )}
              </div>

              <div className="text-sm text-gray-300 mt-4">
                <p>
                  <span className="text-gray-400">Total Tickets:</span>{' '}
                  {item.bookedSeats.length}
                </p>
                <p>
                  <span className="text-gray-400">Seat Number:</span>{' '}
                  {item.bookedSeats.join(', ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBooking
