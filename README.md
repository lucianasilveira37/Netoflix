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

 ## 🚀 Rodando Localmente
bash
Copiar
Editar
git clone https://github.com/seuusuario/seuprojeto.git
cd seuprojeto
npm install
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
Copiar
Editar
VITE_TOKEN_TMDB=seu_token_aqui
Rode o projeto:

bash
Copiar
Editar
npm run dev
Acesse no navegador: http://localhost:5173

## 🔐 Configuração da API TMDB
Crie uma conta em TMDB.

Vá em Settings > API e gere um token v4.

Adicione no arquivo .env conforme mostrado acima.

## 🛠️ Tecnologias Usadas
React

React Router DOM

React Slick

CSS Modules

Vite

The Movie Database API (TMDB)

## 🎞️ Carrossel com React Slick
Exemplo de uso do carrossel:

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
Caminho	Componente	Descrição
/	Home.jsx	Página inicial
/details/:id/:category	Details.jsx	Detalhes do filme

## 📦 Categorias de Filmes


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

As categorias disponíveis são:

🎞️ Populares: popular_movies

💥 Ação: action_movies

💘 Romance: romance_movies

👻 Terror: horror_movies

🧒 Infantil: kids_movies

Para adicionar mais, edite a lógica de categorias e a chamada da API no componente responsável.

## ⏳ Indicador de Carregamento
Use condicional para exibir carregamento:

jsx
Copiar
Editar
{loading ? <LoadingIndicator /> : <MovieContainer movies={movies} />}
Sugestão: use bibliotecas como react-loading-indicators ou crie um componente próprio.

## 📸 Capturas de Tela

![Screenshot](./src/assets/Captura%20de%20tela_2-6-2025_182028_localhost.jpeg)



## 📚 Créditos
API: TMDB

Frontend: React + React Router + Vite

Design: Estilo próprio inspirado nas recomendações da TMDB

## 📌 Melhorias Futuras
🔍 Funcionalidade de busca

❤️ Sistema de login e favoritos

📱 Responsividade aprimorada

✅ Testes com React Testing Library



