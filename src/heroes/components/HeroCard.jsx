import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <Link to={`/hero/${id}`}>
              <img
                src={`/assets/heroes/${id}.jpg`}
                alt={id}
                className="card-img"
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="class-text">{alter_ego}</p>

              {alter_ego !== characters && <p>{characters}</p>}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
