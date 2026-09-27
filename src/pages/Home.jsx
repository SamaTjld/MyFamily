import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { carddata } from "../components/helpers/cardsdata";
import Sub from "../components/Sub/Sub";

const Home = () => {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="browser">
          <div className="browser-body">
            <Sub />
            <div className="grid">
              {carddata.map((card, index) => {
                return (
                  <Card
                    key={index}
                    img={card.img}
                    name={card.name}
                    age={card.age}
                    birthDate={card.birthDate}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
