import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";

function MovieDetails() {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  function getApiBasePath(category) {
    switch (category) {
      case "popular_movies":
      case "kids_movies":
      case "romance_movies":
      case "action_movies":
      case "horror_movies":
        return "movie";
      default:
        return "movie";
    }
  }

  async function fetchMovieDetails() {
    const type = getApiBasePath(category);
    const url = `https://api.themoviedb.org/3/${type}/${id}?language=pt-BR`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      });
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Erro ao buscar detalhes:", error);
    }
  }

  async function fetchTrailer() {
    const type = getApiBasePath(category);
    const url = `https://api.themoviedb.org/3/${type}/${id}/videos?language=pt-BR`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      });
      const data = await response.json();

      let video =
        data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        ) || data.results.find((v) => v.site === "YouTube");

      if (video) {
        setTrailerKey(video.key);
      }
    } catch (error) {
      console.error("Erro ao buscar trailer:", error);
    }
  }

  // Nova função para buscar filmes similares
  async function fetchSimilarMovies() {
    const type = getApiBasePath(category);
    const url = `https://api.themoviedb.org/3/${type}/${id}/similar?language=pt-BR&page=1`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      });
      const data = await response.json();
      setSimilarMovies(data.results || []);
    } catch (error) {
      console.error("Erro ao buscar filmes similares:", error);
    }
  }

 useEffect(() => {
  window.scrollTo(0, 0); // Volta ao topo ao clicar
  setMovie(null);        // Evita mostrar dados do filme anterior
  setTrailerKey(null);   // Evita mostrar trailer anterior
  fetchMovieDetails();
  fetchTrailer();
  fetchSimilarMovies();
}, [id, category]);

  if (!movie) return <div>Carregando...</div>;

  const title = movie.title || movie.name;
  const release = movie.release_date || movie.first_air_date;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button className="back-button" onClick={() => navigate("/")}>
        Voltar página inicial
      </button>
      <div className="overlay">
        <div className="details-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={title}
          />
          <div className="content">
            <h1>{title}</h1>
            <p>
              <strong>Descrição:</strong> {movie.overview}
            </p>
            <p>
              <strong>Lançamento:</strong> {release}
            </p>
            <p>
              <strong>Média de votos:</strong> {movie.vote_average}
            </p>
            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "Indisponível"}
            </p>

            {trailerKey ? (
              <div className="trailer-video">
                <iframe
                  width="100%"
                  height="300"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p>Trailer indisponível.</p>
            )}

            {/* Lista de filmes similares */}
            <div className="similar-movies">
              <h2>Filmes Similares</h2>
              {similarMovies.length > 0 ? (
                <div className="similar-list">
                  {similarMovies.map((movie) => (
                    <div key={movie.id} className="similar-movie-card not-clickable">
  <img
    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
    alt={movie.title || movie.name}
  />
  <p>{movie.title || movie.name}</p>
</div>

                  ))}
                </div>
              ) : (
                <p>Nenhum filme similar encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
