import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate =  useNavigate();
   const goToMovies = () => {
    navigate('/Movies');
   }
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Hero Section */}
            <section className="bg-[#1c1c1c] text-white px-10 py-20">
                <h1 className="text-4xl font-bold mb-4">
                    Book Movie Tickets Online 🎟️
                </h1>
                <p className="text-gray-300 max-w-xl mb-6">
                    Watch the latest movies in your favorite cinemas.
                    Easy booking, best seats, instant confirmation.
                </p>

                <button 
                onClick={goToMovies}
                className="bg-[#f84464] px-6 py-3 rounded-md hover:bg-[#e03a57] transition">
                    Explore Movies
                </button>
            </section>

            {/* Now Showing Section */}
            <section className="px-10 py-12">
                <h2 className="text-2xl font-bold mb-6">
                    Now Showing
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Avengers: Endgame",
                            genre: "Action / Sci-Fi",
                            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXef9DJnZiq5az0UnjkmvkQufOQ5MFnF7HATYRUXN913swRuH1",
                        },
                        {
                            title: "Jawan",
                            genre: "Action / Thriller",
                            img: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
                        },
                        {
                            title: "Inception",
                            genre: "Sci-Fi / Thriller",
                            img: "https://m.media-amazon.com/images/I/51s+G9gkBVL._AC_.jpg",
                        },
                        {
                            title: "SpiderMan: No Way Home",
                            genre: "Sci-Fi / Drama",
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ&s=10",
                        },
                    ].map((movie, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                        >
                            {/* Poster Image */}
                            <img
                                src={movie.img}
                                alt={movie.title}
                                className="h-56 w-full object-cover"
                                onError={(e) =>
                                (e.target.src =
                                    "https://via.placeholder.com/300x400?text=No+Image")
                                }
                            />

                            {/* Details */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{movie.genre}</p>

                                <button className="w-full bg-[#f84464] text-white py-2 rounded-md hover:bg-[#e03a57] transition">
                                    Book Tickets
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Why Choose Us */}
            <section className="bg-white px-10 py-14">
                <h2 className="text-2xl font-bold mb-8 text-center">
                    Why Choose MovieTime?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 shadow rounded-lg">
                        <h3 className="font-semibold mb-2">Easy Booking</h3>
                        <p className="text-sm text-gray-600">
                            Book tickets in just a few clicks with a smooth experience.
                        </p>
                    </div>

                    <div className="p-6 shadow rounded-lg">
                        <h3 className="font-semibold mb-2">Best Seats</h3>
                        <p className="text-sm text-gray-600">
                            Choose your favorite seats with live seat selection.
                        </p>
                    </div>

                    <div className="p-6 shadow rounded-lg">
                        <h3 className="font-semibold mb-2">Instant Confirmation</h3>
                        <p className="text-sm text-gray-600">
                            Get instant booking confirmation and easy refunds.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
