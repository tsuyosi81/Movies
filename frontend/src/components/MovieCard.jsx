import "../css/MovieCard.css"; // Importing the CSS for Home page
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){
    const {favorites,isFavorite, addToFavorites, removeFromFavorites} = useMovieContext(); // Accessing the context to check if the movie is a favorite

    const favorite = isFavorite(movie.id); // Check if the movie is a favorite
    function onFavoriteClick(e){
      e.preventDefault(); // Prevent the default action of the button
      if (favorite) {
          removeFromFavorites(movie.id); // If it's a favorite, remove it
      } else {
          addToFavorites(movie); // If not, add it to favorites
      }
    }
      return(

          <div className="movie-card">
              <div className="movie-poster">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-overlay">
                  <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                  </button>
                  </div>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                {/* <p>{movie.release_date?.split("-")[0]}</p> */}
              </div>
          </div>

      ); 
  }
  
  export default MovieCard;