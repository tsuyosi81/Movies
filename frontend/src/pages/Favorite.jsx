
import "../css/Favorite.css"; // Importing the CSS for styling

function Favorite(){
    return <div className = "favorites-empty">
        <p>You have no favorite movies yet.</p>
        <h1>Your Favorites</h1>
        <p>Start adding some!</p>
        <img src="https://via.placeholder.com/300" alt="No favorites" />
        <a href="/" className="back-to-home">Back to Home</a>
    </div>
}

export default Favorite