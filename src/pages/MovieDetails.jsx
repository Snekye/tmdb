import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/tmdbService";
import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import "./MovieDetails.css";

const MovieDetails = ({ }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  if (!movie) return <div>Film not found</div>;

  return (
    <div className="moviedetails">
      <div className="movieinfo">
        <h3>{movie.title}</h3>
        <span>{(Math.round(movie.vote_average * 10) / 10).toFixed(1)}/10 <FaRegStar color="gold"/>({movie.vote_count})</span>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p>Released on : {movie.release_date}</p>
        <p><br/> {movie.overview}</p>
      </div>
      <div className="line"></div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;
