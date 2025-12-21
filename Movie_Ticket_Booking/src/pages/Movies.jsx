import React from "react";

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Action / Sci-Fi",
      rating: "9.1",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXef9DJnZiq5az0UnjkmvkQufOQ5MFnF7HATYRUXN913swRuH1",
    },
    {
      id: 2,
      title: "Jawan",
      genre: "Action / Thriller",
      rating: "8.7",
      img: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
    },
    {
      id: 3,
      title: "Inception",
      genre: "Sci-Fi / Thriller",
      rating: "9.0",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ&s=10",
    },
    {
      id: 4,
      title: "SpiderMan: No Way Home",
      genre: "Sci-Fi / Drama",
      rating: "8.9",
      img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      genre: "Action / Sci-Fi",
      rating: "9.1",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXef9DJnZiq5az0UnjkmvkQufOQ5MFnF7HATYRUXN913swRuH1",
    },
    {
      id: 6,
      title: "Jawan",
      genre: "Action / Thriller",
      rating: "8.7",
      img: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
    },
    {
      id: 7,
      title: "The Great Flood",
      genre: "Sci-Fi / Thriller",
      rating: "9.0",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmGY7bEatbfOW7rKKInkOEi8IvyJwaazd5w&s",
    },
    {
      id: 8,
      title: "Interstellar",
      genre: "Sci-Fi / Drama",
      rating: "8.9",
      img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-10 py-12">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8">Movies</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* 🖼️ Poster Image */}
            <img
              src={movie.img}
              alt={movie.title}
              className="h-64 w-full object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/300x400?text=No+Image")
              }
            />

            {/* Details */}
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">
                {movie.title}
              </h2>

              <p className="text-sm text-gray-500">{movie.genre}</p>

              <p className="text-sm mt-1">⭐ {movie.rating}/10</p>

              <button className="mt-4 w-full bg-[#f84464] text-white py-2 rounded-md hover:bg-[#e03a57] transition">
                Book Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
