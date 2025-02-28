import { useState } from "react";
import { searchMovies } from "../services/tmdbService";
import MovieCard from "../components/MovieCard";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <div className="movies">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
