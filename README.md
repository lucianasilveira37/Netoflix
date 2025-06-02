# 🎬 Catálogo de Filmes com React + TMDB
![Screenshot](./src/assets/Captura%20de%20tela_2-6-2025_18244_localhost.jpeg)




Aplicação web moderna para explorar filmes de diversas categorias usando a API do [The Movie Database (TMDB)](https://www.themoviedb.org/). Desenvolvida com **React**, navegação dinâmica, carrossel interativo e layout responsivo.

---

## 🧩 Funcionalidades

✅ Explorar filmes por categoria  
✅ Ver detalhes com trailer e gêneros  
✅ Exibir filmes semelhantes  
✅ Carrossel com React Slick  
✅ Indicador de loading  
✅ Layout responsivo  
✅ Organização modular por componentes e páginas

---

## 📁 Estrutura do Projeto

![image](https://github.com/user-attachments/assets/f93ae10b-d152-400d-be11-2033033cce37)

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/seuusuario/seuprojeto.git
cd seuprojeto
npm install
# Adicione o token no arquivo .env
npm run dev
Abra http://localhost:5173

##🔐 Como Configurar a API TMDB
Crie uma conta em https://www.themoviedb.org/

Vá em "Settings > API" e gere um token v4

Crie o arquivo .env na raiz do projeto com:

env
Copiar
Editar
VITE_TOKEN_TMDB=seu_token_aqui
🛠️ Tecnologias Usadas
React

React Router DOM

React Slick

The Movie Database API (TMDB)

CSS Modules

Vite

##🎞️ Carrossel com React Slick
jsx
Copiar
Editar
<Slider {...settings}>
  {movies.map(movie => (
    <MovieCard key={movie.id} {...movie} />
  ))}
</Slider>
Importações obrigatórias:

js
Copiar
Editar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
🔄 Rotas com React Router
/ → Página inicial (Home.jsx)

/details/:id/:category → Detalhes do filme

##📦 Categorias de Filmes

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

populares (popular_movies)

ação (action_movies)

romance (romance_movies)

terror (horror_movies)

infantil (kids_movies)

Pode-se adicionar mais categorias editando o arquivo que lida com as routes ou API URLs.

##⏳ Indicador de Loading
jsx
Copiar
Editar
{loading ? <LoadingIndicator /> : <MovieContainer movies={movies} />}
Use bibliotecas como react-loading-indicators ou componentes próprios.

##📸 Capturas de Tela
![Screenshot](https://user-images.githubusercontent.com/123456789/abcdefg.jpg)



##📚 Créditos
API: TMDB

Frontend: React + React Router + Vite

Design: Estilo próprio com base em recomendações do TMDB

##📌 Melhorias Futuras
Funcionalidade de busca

Sistema de login e favoritos

Responsividade mais refinada

Testes com React Testing Library

