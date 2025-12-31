import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import isoTimeformat from '../../lib/isoTimeformat.js';

const rows = ["A", "B", "C", "D", "E", "F", "G"]; // Seat rows
const seatsPerRow = 18; // Seats per row

const SeatLayout = () => {
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const showData = dummyShowsData.find(show => show.id.toString() === id);
    if (showData && dummyDateTimeData[date]) {
      setShow({
        movie: showData,
        dateTime: dummyDateTimeData
      });
    } else {
      console.error("Show or date not found");
    }
  };

  useEffect(() => {
    getShow();
  }, [id, date]);

  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-10 md:pt-20 gap-10'>

      {/* Available Timings */}
      <div className='w-60 bg-[#5c3039] rounded-lg py-10 h-max md:sticky md:top-10'>
        <p className='text-lg font-semibold px-6 text-white'>Available Timings</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition 
                ${selectedTime?.time === item.time ? "bg-[#F84565] text-white" : "hover:bg-primary/20 text-white"}`}
            >
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>{isoTimeformat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Layout */}
      <div className='flex-1 flex flex-col items-center'>
        <h1 className='text-2xl font-semibold mb-4 text-white'>Select Your Seats</h1>
        <img src={assets.screenImage} alt="screen" className='mb-4' />
        <p className='text-gray-400 text-sm mb-6'>Screen Side</p>

        {/* Seats Grid */}
        <div className='grid gap-2'>
          {rows.map((row) => (
            <div key={row} className='flex gap-2'>
              {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
                const seatId = `${row}${seatIndex + 1}`;
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <div
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-7 h-7 border border-gray-600 rounded-sm cursor-pointer 
                      flex items-center justify-center text-[10px] transition 
                      ${isSelected
                        ? 'bg-[#F84565] text-white'
                        : 'bg-[#2e1e24] text-gray-400 hover:bg-[#72263d]'}`
                    }
                  >
                    {row}{seatIndex + 1}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <button
            onClick={() => {
              const ticketPrice = 49
              const chosenTime = selectedTime || (show.dateTime[date] && show.dateTime[date][0])

              const booking = {
                _id: Date.now().toString(),
                user: { name: 'You' },
                show: {
                  _id: show.movie._id || show.movie.id,
                  movie: show.movie,
                  showDateTime: chosenTime?.time || null,
                  showPrice: ticketPrice,
                },
                amount: ticketPrice * selectedSeats.length,
                bookedSeats: selectedSeats,
                isPaid: false,
              }

              try {
                const existing = JSON.parse(localStorage.getItem('bookings') || '[]')
                existing.push(booking)
                localStorage.setItem('bookings', JSON.stringify(existing))
              } catch (e) {
                console.error('Failed to save booking', e)
              }

              navigate('/my-booking', { state: { movieId: show.movie._id } })
            }}
            className='flex items-center gap-1 px-10 py-3 text-sm mt-6 bg-[#F84565] text-white rounded-full hover:bg-[#fa2e53] transition font-medium cursor-pointer active:scale-95'
          >
            Proceed to Checkout
            <ArrowRightIcon strokeWidth={3} className='w-4 h-4' />
          </button>
        )}
      </div>
    </div>
  );
};

export default SeatLayout;
