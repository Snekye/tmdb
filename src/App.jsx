import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Genres from "./pages/Genres";
//import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/favorites" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
