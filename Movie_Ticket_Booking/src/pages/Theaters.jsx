import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyTheatersData } from "../assets/assets";

const Theaters = () => {
  const navigate = useNavigate();
  const { id, date } = useParams(); // movie id & selected date

  return (
    <div className="min-h-screen text-white px-6 md:px-16 lg:px-40 py-16">
      
      <h1 className="text-2xl font-semibold mb-8">
        Select Theater & Showtime
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyTheatersData.map(theater => (
          <div
            key={theater.id}
            className="border border-gray-700 rounded-2xl p-6 hover:border-[#f84565] transition"
          >
            {/* THEATER INFO */}
            <div className="mb-4">
              <h2 className="text-lg font-medium">{theater.name}</h2>
              <p className="text-sm text-gray-400">{theater.location}</p>
            </div>

            {/* SHOW TIMES */}
            <div className="flex flex-wrap gap-3">
              {theater.shows.map((time, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!id || !date) {
                      // If movie or date not present, navigate to movies list
                      navigate(`/movie`);
                      return;
                    }

                    const encodedTime = encodeURIComponent(time);
                    navigate(`/movie/${id}/${date}?theater=${theater.id}&time=${encodedTime}`);
                  }}
                  className="px-4 py-2 border border-gray-600 rounded-lg
                  text-sm hover:bg-[#f84565] hover:border-[#f84565]
                  transition"
                >
                  {time}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  try {
                    const loc = { theaterId: theater.id, name: theater.name, location: theater.location };
                    localStorage.setItem('selectedLocation', JSON.stringify(loc));
                    alert('Location set to ' + theater.location);
                    navigate('/movie');
                  } catch (e) {
                    console.error('Failed to set location', e);
                  }
                }}
                className="px-3 py-1 text-xs bg-white/5 rounded-full hover:bg-white/10 transition"
              >
                Set as my location
              </button>

              <button
                onClick={() => navigate(`/movie`)}
                className="px-3 py-1 text-xs border border-gray-600 rounded-full hover:bg-white/5 transition"
              >
                Browse Movies
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theaters;
