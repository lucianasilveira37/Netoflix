import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";

function Header({ onCategoryChange, selectedCategory }) {
  return (
    <div className="header-container">
      <img width="180" src={logo} alt="Logo" />

      <Button
        name="Filmes Populares"
        onClick={() => onCategoryChange("popular_movies")}
        active={selectedCategory === "popular_movies"}
      />
      <Button
       name="Filmes Infantis"
      onClick={() => onCategoryChange("kids_movies")}
      active={selectedCategory === "kids_movies"}
      />
     <Button
  name="Filmes de Romance"
  onClick={() => onCategoryChange("romance_movies")}
  active={selectedCategory === "romance_movies"}
/>
      <Button
        name="Filmes de Ação"
        onClick={() => onCategoryChange("action_movies")}
        active={selectedCategory === "action_movies"}
      />
     <Button
  name="Filmes de Terror"
  onClick={() => onCategoryChange("horror_movies")}
  active={selectedCategory === "horror_movies"}
/>

    </div>
  );
}

export default Header;
