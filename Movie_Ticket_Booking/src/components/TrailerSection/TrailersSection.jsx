import React, { useState } from 'react';

const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM',
    videoId: 'WpW36ldAqnM'
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8',
    videoId: '-sAOWhvheK8'
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y',
    videoId: '1pHDWnXmK7Y'
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g',
    videoId: 'umiKiW4En9g'
  },
];

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  const handleThumbnailClick = (trailer) => {
    setCurrentTrailer(trailer);
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-44 py-16 sm:py-20 overflow-hidden">
      {/* Section Title */}
      <p className="text-gray-300 font-medium text-lg text-center sm:text-left">
        Trailer
      </p>

      {/* Player */}
      <div className="relative mt-6 w-full max-w-4xl mx-auto">
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${currentTrailer.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 mx-auto max-w-full overflow-x-auto scrollbar-hide py-2">
        {dummyTrailers.map((trailer, idx) => (
          <img
            key={idx}
            src={trailer.image}
            alt={`Trailer ${idx + 1}`}
            className={`
              h-20 sm:h-24 md:h-28 w-28 sm:w-36 md:w-44 shrink-0 rounded-lg cursor-pointer border-2 transition-transform duration-300
              ${currentTrailer.videoId === trailer.videoId
                ? 'border-pink-500 scale-105'
                : 'border-transparent hover:scale-105'
              }
            `}
            onClick={() => handleThumbnailClick(trailer)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
