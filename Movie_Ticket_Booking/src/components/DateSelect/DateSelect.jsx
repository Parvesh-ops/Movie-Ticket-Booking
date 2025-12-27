import { ChevronLeftIcon, ChevronRightIcon, } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime,id }) => {

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

   const onBookHandler = () => {
    if (!selectedDate) {
        alert("Please select a date before booking!");
        return;
    }

    navigate(`/movie/${id}/${selectedDate}`);
    window.scrollTo(0, 0);
};


    return (
        <div className="pt-20">
            <div className="
        relative
        flex flex-col md:flex-row
        items-center justify-between
        gap-10
        p-8
        rounded-2xl
        bg-linear-to-r from-pink-500/10 to-purple-500/10
        backdrop-blur-md
        border border-white/10
        shadow-lg
      ">
                {/* LEFT SIDE */}
                <div>
                    <p className="text-lg font-semibold text-white">
                        Choose Date
                    </p>

                    <div className="flex items-center gap-6 mt-6">
                        <ChevronLeftIcon
                            className="text-[#f84565] cursor-pointer hover:scale-110 transition"
                            size={28}
                        />

                        <div className="flex gap-4">
                            {Object.keys(dateTime).map((date) => {
                                const isActive = selectedDate === date;

                                return (
                                    <button
                                        key={date}
                                        onClick={() => setSelectedDate(date)}
                                        className={`
                      h-16 w-16
                      rounded-xl
                      flex flex-col items-center justify-center
                      text-sm
                      transition-all
                      ${isActive
                                                ? "bg-[#f84565] text-white shadow-lg scale-105"
                                                : "bg-white/5 text-white/80 hover:bg-white/10"
                                            }
                    `}
                                    >
                                        <span className="font-semibold">
                                            {new Date(date).toLocaleDateString("en-US", {
                                                weekday: "short",
                                            })}
                                        </span>
                                        <span className="text-xs">
                                            {new Date(date).getDate()}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <ChevronRightIcon
                            className="text-[#f84565] cursor-pointer hover:scale-110 transition"
                            size={28}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE BUTTON */}
                <button
                    onClick={onBookHandler}
                   
                    className={`
        mt-6 md:mt-0
        px-10 py-3
        rounded-full
        font-semibold
        transition-all
        shadow-lg
        ${!selectedDate
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-[#f84565] hover:bg-[#f8244b] text-white"
                        }
    `}
                >
                    Book Now
                </button>

            </div>
        </div>
    );
};

export default DateSelect;
