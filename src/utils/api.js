export const baseUrl = "https://api.themoviedb.org/3";
const APIKey = import.meta.env.VITE_API3_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${APIKey}&with_genres=35`,
  fetchMovieLatest: `/movie/latest?api_key=${APIKey}&language=en-US`,
  fetchHorrorMovies: `/discover/tv?api_key=${APIKey}&with_genres=27`,
  fetchRomanticMovies: `/discover/tv?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${APIKey}&with_genres=99`,
  fetchTVPopular: `/tv/popular?api_key=${APIKey}&language=en-US`,
  fetchTVAiringToday: `/tv/airing_today?api_key=${APIKey}&language=en-US`,
  fetchTVTopRated: `/tv/top_rated?api_key=${APIKey}&language=en-US`,
  fetchNowPlaying: `/movie/now_playing?api_key=${APIKey}&language=en-US`,
};

for (let i in requests) {
  requests[i] = baseUrl + requests[i];
}

export default requests;
