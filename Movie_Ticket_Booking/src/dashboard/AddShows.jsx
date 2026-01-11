import React, { useState, useEffect } from 'react';
import { Check, Star, X, Calendar, Clock } from 'lucide-react';
import Title from './Title';
import { kConveter } from '../../lib/kConverter';


// Dummy data for demonstration
const dummyAddShowsData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    vote_average: 8.7,
    vote_count: 25000,
    release_date: "1994-09-23"
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 8.7,
    vote_count: 18000,
    release_date: "1972-03-14"
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 9.0,
    vote_count: 32000,
    release_date: "2008-07-18"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    vote_average: 8.9,
    vote_count: 27000,
    release_date: "1994-10-14"
  }
];



<Title text1="List" text2="Bookings" />

const AddShows = () => {
  const currency = '$';
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState('');
  const [showPrice, setShowPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyAddShowsData);
  };

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) {
      alert('Please select a date and time');
      return;
    }

    const [date, time] = dateTimeInput.split('T');
    if (!date || !time) {
      alert('Invalid date-time format');
      return;
    }

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });

    setDateTimeInput('');
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const times = (prev[date] || []).filter(t => t !== time);
      const copy = { ...prev };
      if (times.length > 0) {
        copy[date] = times;
      } else {
        delete copy[date];
      }
      return copy;
    });
  };

  const handleAddShow = async () => {
    // Validation
    if (!selectedMovie) {
      alert('Please select a movie');
      return;
    }
    if (!showPrice || parseFloat(showPrice) <= 0) {
      alert('Please enter a valid show price');
      return;
    }
    if (Object.keys(dateTimeSelection).length === 0) {
      alert('Please add at least one show time');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    try {
      const showData = {
        movieId: selectedMovie,
        price: parseFloat(showPrice),
        showTimes: dateTimeSelection
      };
      
      console.log('Adding show:', showData);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setSuccessMessage('Show added successfully!');
      
      // Reset form
      setSelectedMovie(null);
      setShowPrice('');
      setDateTimeSelection({});
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
      
    } catch (error) {
      alert('Error adding show. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const selectedMovieData = nowPlayingMovies.find(m => m.id === selectedMovie);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Title text1='Add' text2='Shows' />
        
        {successMessage && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-lg flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>{successMessage}</span>
          </div>
        )}

        {nowPlayingMovies.length > 0 ? (
          <>
            {/* Movie Selection */}
            <div className="mb-8">
              <p className='mt-10 text-lg font-medium mb-4'>Select Movie</p>
              <div className='overflow-x-auto pb-4'>
                <div className='flex gap-4 w-max'>
                  {nowPlayingMovies.map((movie) => (
                    <div 
                      key={movie.id} 
                      className={`relative w-40 cursor-pointer transition-all duration-300 ${
                        selectedMovie === movie.id 
                          ? 'ring-2 ring-red-500 scale-105' 
                          : 'hover:scale-105 opacity-80 hover:opacity-100'
                      }`}
                      onClick={() => setSelectedMovie(movie.id)}
                    >
                      <div className='relative rounded-lg overflow-hidden'>
                        <img 
                          src={movie.poster_path} 
                          alt={movie.title} 
                          className='w-full h-60 object-cover'
                        />
                        <div className='text-xs flex items-center justify-between p-2 bg-black/80 w-full absolute bottom-0 left-0'>
                          <div className='flex items-center gap-1'>
                            <Star className='w-3 h-3 text-yellow-400 fill-amber-400' />
                            <span>{movie.vote_average.toFixed(1)}</span>
                          </div>
                          <p className='text-gray-300'>
                            {kConveter(movie.vote_count)}
                          </p>
                        </div>
                      </div>
                      {selectedMovie === movie.id && (
                        <div className="absolute top-2 right-2 flex items-center justify-center bg-red-600 h-7 w-7 rounded-full shadow-lg">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <p className='font-medium truncate mt-2'>{movie.title}</p>
                      <p className='text-gray-400 text-xs'>{movie.release_date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Show Details Form */}
            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
              {selectedMovieData && (
                <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
                  <img 
                    src={selectedMovieData.poster_path} 
                    alt={selectedMovieData.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{selectedMovieData.title}</h3>
                    <p className="text-gray-400 text-sm">{selectedMovieData.release_date}</p>
                  </div>
                </div>
              )}

              {/* Show Price Input */}
              <div>
                <label className='block text-sm font-medium mb-2'>Show Price</label>
                <div className='inline-flex items-center gap-2 border border-gray-600 px-4 py-3 rounded-lg bg-gray-700'>
                  <p className='text-gray-300 font-medium'>{currency}</p>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={showPrice}
                    onChange={(e) => setShowPrice(e.target.value)}
                    placeholder='Enter price'
                    className='outline-none bg-transparent text-white w-32'
                  />
                </div>
              </div>

              {/* Date & Time Section */}
              <div>
                <label className='block text-sm font-medium mb-2'>Add Show Times</label>
                <div className='flex flex-wrap gap-3 items-end'>
                  <div className="flex-1 min-w-62.5">
                    <input 
                      type="datetime-local" 
                      value={dateTimeInput} 
                      onChange={(e) => setDateTimeInput(e.target.value)}
                      className='w-full outline-none bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg'
                    />
                  </div>
                  <button 
                    onClick={handleDateTimeAdd}
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2'
                  >
                    <Clock className="w-4 h-4" />
                    Add Time
                  </button>
                </div>

                {/* Display added date/time */}
                {Object.keys(dateTimeSelection).length > 0 && (
                  <div className='mt-4 space-y-3'>
                    <p className="text-sm text-gray-400">Selected Show Times:</p>
                    {Object.entries(dateTimeSelection).map(([date, times]) => (
                      <div key={date} className='p-4 bg-gray-700 rounded-lg border border-gray-600'>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <p className='font-medium text-white'>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div className='flex gap-2 flex-wrap'>
                          {times.map((t) => (
                            <div key={t} className='px-4 py-2 bg-gray-800 text-white rounded-full flex items-center gap-2 border border-gray-600'>
                              <Clock className="w-3 h-3 text-gray-400" />
                              <span className='text-sm font-medium'>{t}</span>
                              <button 
                                onClick={() => handleRemoveTime(date, t)} 
                                className='ml-1 text-red-400 hover:text-red-300 transition-colors'
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className='pt-4 border-t border-gray-700'>
                <button
                  className={`w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                  }`}
                  onClick={handleAddShow}
                  disabled={loading}
                >
                  {loading ? 'Adding Show...' : 'Add Show'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-gray-400">Loading movies...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddShows;