import { NavLink } from "react-router-dom";
import BtnOpen from "../BtnOpen/BtnOpen";
import "./style.css";
const Card = ({ img, name, age, birthDate, index }) => {
  return (
    <>
      <NavLink to={`/card/${index}`} className="navlink">
        <div className="card">
          <img src={img} className="card-photo" />
          <div className="card-body">
            <h2 className="name">{name}</h2>
            <p className="age">{age}</p>
            <p className="birthDate">{birthDate}</p>

            <BtnOpen />
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
