import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { ClockIcon } from 'lucide-react'

const SeatLayout = () => {
  const { id, date } = useParams()
  const [selectedSeats, setselectedSeats] = useState([])
  const [selectedTime, setselectedTime] = useState(null)
  const [show, setshow] = useState(null)

  const navigate = useNavigate()

  const getShow = async () => {
    const show = dummyShowsData.find(show => show.id === id);
    if (show) {
      setshow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }
  useEffect(() => {
    getShow()
  }, [])

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

      {/* Available Timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p>Availabe Timings</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date].map((item) => (
            <div key={item.time} onClick={()=>setselectedTime(item)} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedTime?.time === item.time ? "bg-primary text-wite" : "hover:bg-primary/20"}`}>
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SeatLayout */}
      <div>

      </div>

    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      Loading...
    </div>
  )
}

export default SeatLayout
