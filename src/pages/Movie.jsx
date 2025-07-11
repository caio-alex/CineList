import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import "../pages/MovieStyle.css";
import MovieCard from "../Components/MovieCard";
import "../pages/Movie.css";
const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageUrl = import.meta.env.VITE_IMG;
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    setLoading(false);
  };


  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }
  , [id]);
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="movie-page">{movie && (
    <>
      <MovieCard movie={movie} showLink={false} />
      
      <div className="info">
        <h3>
          <BsGraphUp /> Orçamento:
        </h3>
        <p>{formatCurrency(movie.budget)}</p>
        <h3><BsWallet2 /> Receita:</h3>
        <p>{formatCurrency(movie.revenue)}</p>
        <h3><BsHourglassSplit /> Duração:</h3>
        <p>{movie.runtime} minutos</p>
        <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
        <p>{movie.overview}</p>
        <h3>Gêneros:</h3>
        <ul className="genres">
          {movie.genres.map((genre) => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
    )}
    </div>
  )
}

export default Movie