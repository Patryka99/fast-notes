export default function Button2({ children, Color, onClick }) {
  return (
    <button
      className="btn2"
      style={{ color: Color, border: `1px solid ${Color}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
