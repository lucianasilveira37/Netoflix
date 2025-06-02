import { Link } from "react-router-dom";
import "./MovieCard.css";
import { FaStar } from "react-icons/fa";
import Stars from "../stars/Stars";

function MovieCard({ poster_path, title, vote_average, id }) {
  return (
    <div className="movie-card">
      <img width="200" src={poster_path} alt={title} />
      <h3 className="movie-title">{title}</h3>

      {/* Mostrar as estrelas usando o componente Stars */}
      <Stars vote={vote_average} />

      

      <button>
        <Link to={`/details/${id}`}>Ver Mais</Link>
      </button>
    </div>
  );
}

export default MovieCard;


