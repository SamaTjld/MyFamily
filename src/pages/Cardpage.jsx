import { carddata } from "../components/helpers/cardsdata";
import { useParams } from "react-router-dom";
import BtnHome from "../components/BtnHome/BtnHome";
import Children from "../components/Children/Children";

const Cardpage = () => {
  const { id } = useParams();
  const card = carddata[id];
  const spouse = card.spouse;
  const children = card.children;

  return (
    <>
      <div className="screen screeen">
        <div className="browser">
          <div className="browser-body">
            <BtnHome />
            <h2>Супруги</h2>
            <div className="grid">
              <div className="card">
                <img src={card.img} className="card-photo" />
                <div className="card-body">
                  <p className="name">{card.name}</p>
                  <p className="age">{card.age}</p>
                  <p className="birthDate">{card.birthDate}</p>
                </div>
              </div>

              <div className="card">
                <img src={spouse.img} className="card-photo" />
                <div className="card-body">
                  <p className="name">{spouse.name}</p>
                  <p className="age">{spouse.age}</p>
                  <p className="birthDate">{spouse.birthDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen">
        <div className="browser">
          <div className="browser-body">
            <h2>Дети</h2>
            <div className="grid">
              {children.map((child, index) => (
                <Children
                  key={index}
                  img={child.img}
                  name={child.name}
                  age={child.age}
                  birthDate={child.birthDate}
                />
              ))}
            </div>
            <BtnHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardpage;
