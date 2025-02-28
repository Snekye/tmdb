import { useState, useEffect } from "react";
import { getGenres, getMoviesByGenre } from "../services/tmdbService";
import MovieCard from "../components/MovieCard";
import "./Genres.css";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        const data = await getGenres();
        setGenres(data);
    } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;
    const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await getMoviesByGenre(selectedGenre);
          setMovies(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, [selectedGenre]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

  return (
    <div className="genres">
      <h2>Search Movies by Genre</h2>

      <select onChange={(e) => setSelectedGenre(e.target.value)} >
        <option value="">Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}> {genre.name} </option>
        ))}
      </select>

        {movies ? (
      <div className="movies">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
        ) : null }
    </div>
  );
};

export default Genres;
