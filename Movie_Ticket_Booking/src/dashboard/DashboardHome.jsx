import {
  ChartLine,
  CircleDollarSign,
  PlayCircleIcon,
  StarIcon,
  UserIcon
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../assets/assets'
import Title from './title'
import { dateFormat } from '../../lib/dateFormat'

const DashboardHome = () => {
  const currency = '$'

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  })

  const [loading, setLoading] = useState(true)

  const dashboardCards = [
    { title: 'Total Bookings', value: dashboardData.totalBookings || 0, icon: ChartLine },
    { title: 'Total Revenue', value: `${currency}${dashboardData.totalRevenue || 0}`, icon: CircleDollarSign },
    { title: 'Active Shows', value: dashboardData.activeShows.length || 0, icon: PlayCircleIcon },
    { title: 'Total Users', value: dashboardData.totalUser || 0, icon: UserIcon },
  ]

  useEffect(() => {
    setDashboardData(dummyDashboardData)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <>
      <Title text1="Admin" text2="Dashboard" />

      {/* Dashboard Cards */}
      <div className=" flex flex-wrap gap-4 mt-6">
        {dashboardCards.map(({ title, value, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3
            bg-linear-to-r from-red-500 to-pink-500  border border-red-500 rounded-md
            max-w-55 w-full"
          >
            <div>
              <h1 className="text-sm">{title}</h1>
              <p className="text-xl font-medium mt-1">{value}</p>
            </div>
            <Icon className="w-6 h-6" />
          </div>
        ))}
      </div>

      {/* Active Shows */}
      <p className="mt-10 text-lg font-medium">Active Shows</p>

      <div className="flex flex-wrap gap-6 mt-4 max-w-5xl">
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-55 rounded-lg overflow-hidden pb-3
            bg-pink-300/10 border border-pink-400/20
            hover:-translate-y-1 transition duration-300"
          >
            <img
              src={show.movie.poster_path}
              alt={show.movie.title}
              className="h-60 w-full object-cover"
            />

            <p className="font-medium p-2 truncate">
              {show.movie.title}
            </p>

            <div className="flex items-center justify-between px-2">
              <p className="text-lg font-medium">
                {currency} {show.showPrice}
              </p>

              <p className="flex items-center gap-1 text-sm text-gray-400">
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {show.movie.vote_average.toFixed(2)}
              </p>
            </div>

            <p className="px-2 pt-2 text-sm text-gray-500">
              {dateFormat(show.showDateTime)}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashboardHome
