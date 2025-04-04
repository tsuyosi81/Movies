const API_KEY = "01a45abf2120b616665d65a21f914e16";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    
    return data.results || []; // Return the list of popular movies or an empty array if none found
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    
    return data.results || []; // Return the list of search results or an empty array if none found
};