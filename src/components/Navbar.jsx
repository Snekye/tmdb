import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TMDB App</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/genres">Genres</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
