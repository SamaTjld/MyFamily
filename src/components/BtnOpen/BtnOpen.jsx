import "./style.css";
const BtnOpen = () => {
  return (
    <>
      <div className="open">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2 L12 14 M12 2 C 8 2 6 6 6 9 M12 2 C 16 2 18 6 18 9" />
        </svg>
        <span>Открыть семью</span>
      </div>
    </>
  );
};

export default BtnOpen;
