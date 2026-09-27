const Children = ({ img, name, age, birthDate }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="" className="card-photo" />
        <div className="card-body">
          <h2 className="name">{name}</h2>
          <p className="age">{age}</p>
          <p className="birthDate">{birthDate}</p>
        </div>
      </div>
    </>
  );
};

export default Children;
