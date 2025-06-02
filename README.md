# 🎬 Catálogo de Filmes com React + TMDB

[![Uploading image.png…]()](https://github.com/lucianasilveira37/Netoflix/blob/main/src/assets/Captura%20de%20tela_2-6-2025_18244_localhost.jpeg)



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

🔐 Como Configurar a API TMDB
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

🎞️ Carrossel com React Slick
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

📦 Categorias de Filmes
populares (popular_movies)

ação (action_movies)

romance (romance_movies)

terror (horror_movies)

infantil (kids_movies)

Pode-se adicionar mais categorias editando o arquivo que lida com as routes ou API URLs.

⏳ Indicador de Loading
jsx
Copiar
Editar
{loading ? <LoadingIndicator /> : <MovieContainer movies={movies} />}
Use bibliotecas como react-loading-indicators ou componentes próprios.

📸 Capturas de Tela
(Insira aqui screenshots do projeto rodando — home, detalhes, trailer, carrossel.)

📚 Créditos
API: TMDB

Frontend: React + React Router + Vite

Design: Estilo próprio com base em recomendações do TMDB

📌 Melhorias Futuras
Funcionalidade de busca

Sistema de login e favoritos

Responsividade mais refinada

Testes com React Testing Library

