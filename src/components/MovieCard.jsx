import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="moviecard">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <span>{(Math.round(movie.vote_average * 10) / 10).toFixed(1)} <FaRegStar color="gold"/> · </span>
    <Link to={`/movie/${movie.id}`}>Learn more</Link>
  </div>
);

export default MovieCard;
