import "./Button.css";



function Button({ name, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`button ${active ? "active" : ""}`}
    >
      {name}
    </button>
  );
}

export default Button;


