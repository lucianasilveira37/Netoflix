import Slider from "react-slick";
import MovieCard from "../movieCard/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MovieContainer({ movies }) {
  return (
    <div className="movie-container">
      {movies.map((item) => (
        <MovieCard
          key={item.id}
          poster_path={"https://image.tmdb.org/t/p/w500" + item.poster_path}
          title={item.title || item.name}
          vote_average={item.vote_average}
          id={item.id}
        />
      ))}
    </div>
  );
}


export default MovieContainer;
