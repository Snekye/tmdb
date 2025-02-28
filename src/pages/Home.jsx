import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/tmdbService";
import MovieCard from "../components/MovieCard";
import "./Home.css"

const Home = () => {
  const [movies, setMovies] = useState([]); // Stocke les films
  const [loading, setLoading] = useState(true); // Indique si ça charge
  const [error, setError] = useState(null); // Stocke l’erreur si besoin

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div className="home">
      <h2>Trendy this week :</h2>
      <div className="movies">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;