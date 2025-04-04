import {Link} from 'react-router-dom';
import "../css/NavBar.css"; // Importing the CSS for NavBar

function NavBar(){
    return <nav className = "navbar">
        <div className="navbar-brand">
            <Link to="/">MovieApp</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="navbar-links">Home</Link>
            <Link to="/favorites" className="navbar-links"> Favorites</Link>
        </div>
    </nav>
}

export default NavBar;