import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Stars.css";

export default function Stars({ vote }) {
  const rating = vote / 2; // converte nota 0-10 para 0-5
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="#ffc107" aria-label="Estrela cheia" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" aria-label="Meia estrela" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ccc" aria-label="Estrela vazia" />);
    }
  }

  return <div className="stars">{stars}</div>;
}
