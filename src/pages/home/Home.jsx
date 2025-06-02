import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieContainer from "../../components/movieContainer/MovieContainer";



import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular_movies");
  const [loading, setLoading] = useState(false);

  async function fetchMovies(selectedCategory) {
    setLoading(true);
    let url = "";

  switch (selectedCategory) {
  case "popular_movies":
    url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
    break;
  case "kids_movies":
    url = "https://api.themoviedb.org/3/discover/movie?with_genres=16,10751&certification_country=BR&certification.lte=L&language=pt-BR";
    break;
  case "romance_movies":
    url = "https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR";
    break;
  case "action_movies":
    url = "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR";
    break;
  case "horror_movies":
  url = "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR";
  break;
  default:
   
  }


    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      });

      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(category);
  }, [category]);

  return (
    <>
      <Header onCategoryChange={setCategory} selectedCategory={category} />
      {loading ? (
        <div className="loading-container">Carregando...</div>
      ) : (
       <MovieContainer movies={movies.slice(0, 30)} />
      )}
    </>
  );
}

export default Home;
