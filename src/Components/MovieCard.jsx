import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import "../pages/MovieStyle.css";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>
            <FaStar /> {movie.vote_average}
          </p>
        </div>
          {showLink && (
            <Link to={`/movie/${movie.id}`} className="btn">
              Detalhes
            </Link>
          )}
        
    </div>
  )
}

export default MovieCard