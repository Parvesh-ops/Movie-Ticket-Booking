import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const dummyTheatersData = [
  {
    id: "t1",
    name: "QFX Cinemas",
    location: "Civil Mall, Kathmandu",
    shows: ["10:30 AM", "1:45 PM", "5:00 PM", "8:30 PM"]
  },
  {
    id: "t2",
    name: "Big Movies",
    location: "City Center, Kathmandu",
    shows: ["11:00 AM", "2:30 PM", "6:15 PM", "9:45 PM"]
  },
  {
    id: "t3",
    name: "Apple Cinemas",
    location: "KL Tower, Kathmandu",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
  {
    id: "t4",
    name: "City Complex Cinemas",
    location: "Biratnagar, Kathmandu",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
  {
    id: "t5",
    name: "City  Cinemas",
    location: "Biratnagar, Kathmandu",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
];

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theaters;
