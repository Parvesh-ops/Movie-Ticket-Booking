import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
  },
];

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [isPlaying, setIsPlaying] = useState(true); // autoplay by default

  const handleThumbnailClick = (trailer) => {
    setCurrentTrailer(trailer);
    setIsPlaying(true); // autoplay when thumbnail clicked
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      {/* Section Title */}
      <p className="text-gray-300 font-medium text-lg max-w-240 mx-auto">
        Trailer
      </p>

      {/* Player */}
      <div className="relative mt-6 w-full max-w-4xl mx-auto">
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={true}
          playing={isPlaying}  // autoplay
          width="100%"
          height="500px"
          className="rounded-lg mt-6"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-8 mx-32 overflow-hidden scrollbar-hide">
        {dummyTrailers.map((trailer, idx) => (
          <img
            key={idx}
            src={trailer.image}
            alt={`Trailer ${idx + 1}`}
            className={`h-24 w-36 rounded-lg cursor-pointer border-2 transition-transform duration-300 ${
              currentTrailer.videoUrl === trailer.videoUrl
                ? 'border-[#F84565] scale-105'
                : 'border-transparent hover:scale-105'
            }`}
            onClick={() => handleThumbnailClick(trailer)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
