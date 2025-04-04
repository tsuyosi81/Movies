import MovieCard from "../components/MovieCard";
import React, { useState, useEffect} from 'react'; // Importing React and useState hook
import "../css/Home.css"; // Importing the CSS for Home page
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
    const [ searchQuery, setSearchQuery ] = useState(""); // State to hold the search query
    const [movies, setMovies] = useState([]); // State to hold the list of movies
    const [error, setError] = useState(null); // State to hold any error messages
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{

                const popularMovies = await getPopularMovies(); // Fetching popular movies from the API
                setMovies(popularMovies); // Updating the state with the fetched movies
            
            } catch (err) {
            
                console.og(err) // Logging the error to the console for debugging
                setError("Failed to fetch popular movies. Please try again later."); // Setting error message if fetching fails
            
            } finally {
            
                // This block runs regardless of success or failure
                setLoading(false); // Setting loading to false after fetching is done
            
            }
        }

        loadPopularMovies();

    },[]); // Empty dependency array means this effect runs once on mount
    
    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (!searchQuery.trim()) return; // If the search query is empty or only whitespace, do nothing
        if (loading) return; // If already loading, do not initiate another search

        setLoading(true) 
        try{
            const searchResults = await searchMovies(searchQuery); // Fetching search results from the API
            setMovies(searchResults); // Updating the state with the search results
        }catch(err){
            setError("Failed to search movies. Please try again later."); // Set error message if search fails
        }finally{
            setLoading(false); // Ensure loading is set to false after the search is done, regardless of success or failure
        } // Set loading to true to indicate a new search is in progress
        
        setSearchQuery("")
    };

    return <div className="home">

        <form onSubmit={handleSearch} className="seach-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="seach-input"
                value = {searchQuery} // Binding the input value to the state
                onChange = {(e) => setSearchQuery(e.target.value)} // Updating the state on input change
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>} {/* Display error message if there's an error */}

        {/* If loading is true, show loading message */}

        {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
            {movies.map((movie) => 
             (<MovieCard movie={movie} key={movie.id} />)
            )}
        </div>}

        
    </div>
}

export default Home;  // Exporting the Home component as the default export of the module.