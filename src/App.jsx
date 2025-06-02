import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/details/MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:category/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}


export default App;
