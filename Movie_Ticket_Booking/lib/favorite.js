export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const addToFavorites = (movie) => {
  const favorites = getFavorites();

  const isAlreadyFavorite = favorites.find(
    (fav) => fav._id === movie._id
  );

  if (!isAlreadyFavorite) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, movie])
    );
  }
};

export const removeFromFavorites = (id) => {
  const favorites = getFavorites().filter(
    (movie) => movie._id !== id
  );

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const isFavorite = (id) => {
  return getFavorites().some(movie => movie._id === id);
};
