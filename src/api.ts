export const fetchMovies = async (query: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9b613c126321a1233baeabe9c9bf0570&query=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
