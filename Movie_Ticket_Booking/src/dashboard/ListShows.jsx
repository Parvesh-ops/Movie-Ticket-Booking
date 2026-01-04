import React, { useState, useEffect } from 'react'
import { dummyShowsData } from '../assets/assets'
import Title from './title'
import { dateFormat } from '../../lib/dateFormat'

const ListShows = () => {
  const currency = '$'
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllShows = async () => {
    try {
      // movie:dummyShowsData[0],  .//// create 1 shows from dummyShowsData

      // create 5 shows from dummyShowsData
      const generatedShows = dummyShowsData.slice(0, 5).map((movie, index) => ({
        movie: movie,
        showsDateTime: new Date(
          Date.now() + index * 86400000
          // Date.now() + index * 2 * 60 * 60 * 1000 // gap of 2 hours
        ).toISOString(),
        showPrice: 59 + index * 10,
        occupiedSeats: {
          A1: 'user_1',
          B1: 'user_2',
          C1: 'user_3',
        },
      }))

      setShows(generatedShows)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return !loading ? (
    <>
      <Title text1="List" text2="Shows" />

      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-red-800/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earning</th>
            </tr>
          </thead>

          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-red-800/20 bg-red-800/10 even:bg-red-900/10"
              >
                <td className="p-2 min-w-45 pl-5">
                  {show.movie.title}
                </td>
                <td className="p-2">
                  {dateFormat(show.showsDateTime)}
                </td>
                <td className="p-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="p-2">
                  {currency}{' '}
                  {Object.keys(show.occupiedSeats).length * show.showPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  )
}

export default ListShows
