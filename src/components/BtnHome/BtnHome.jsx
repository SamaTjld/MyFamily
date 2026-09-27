import { NavLink } from "react-router-dom";
import "./style.css";

const BtnHome = () => {
  return (
    <>
      <NavLink to="/" className="back-link">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18 L9 12 L15 6" />
        </svg>
        Назад, на главную
      </NavLink>
      {/* <a className="back-link" href="/">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15 18 L9 12 L15 6" />
      </svg>
      Назад, на главную
    </a> */}
    </>
  );
};

export default BtnHome;
