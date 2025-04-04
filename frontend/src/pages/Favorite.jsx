
import "../css/Favorite.css"; // Importing the CSS for styling
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite(){
    const {favorites} = useMovieContext(); // Accessing the context to get favorite movies

    if (favorites){
        return <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => 
             (<MovieCard movie={movie} key={movie.id} />)
            )}
        </div>
        </div>
    }

    return <div className = "favorites-empty">
        <p>You have no favorite movies yet.</p>
        <h1>Your Favorites</h1>
        <p>Start adding some!</p>
        <img src="https://via.placeholder.com/300" alt="No favorites" />
        <a href="/" className="back-to-home">Back to Home</a>
    </div>
}

export default Favorite