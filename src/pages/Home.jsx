import { useState, useEffect} from "react"
import MovieCard from "../Components/MovieCard";
const moviesURL = import.meta.env.VITE_API; 
const apiKey = import.meta.env.VITE_API_KEY;

import "../pages/MovieStyle.css";

const Home = () => {
  console.log(moviesURL, apiKey);
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);

    console.log(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
  <div className="container">
    <h2 className="title">Melhores Filmes</h2>
    <p className="description">Veja os filmes mais bem avaliados pelos usuários!</p>
    <div className="movies-container">
      {topMovies.length === 0 && <p>Carregando...</p>}
      {
        topMovies.length > 0 && topMovies.map((movie) => 
        <MovieCard key={movie.id} movie={movie}/>)
      }
    </div>
  </div>
  )
}

export default Home;