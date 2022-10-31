import React, { useMemo } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigator = useNavigate();
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const onNavigateBack = () => {
    if (hero.id.replace("-", " ").split(" ")[0] == "marvel") navigator(-1);
    if (hero.id.replace("-", " ").split(" ")[0] == "dc") navigator(-1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(17, 16, 16)",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <div>
        <h1
          style={{ color: "white", textAlign: "center" }}
          className="animate__animated animate__fadeInRight"
        >
          {hero.superhero}
        </h1>
        <p
          style={{ color: "white", textAlign: "center" }}
          className="animate__animated animate__fadeInLeft"
        >
          {hero.alter_ego}
        </p>
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.id}
          style={{
            height: "580px",
            width: "90%",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
          className="animate__animated animate__fadeInLeft"
        />
      </div>
      <div style={{ height: "75%", width: "50%", padding: "20px" }}>
        <h3
          style={{ color: "white", textAlign: "center" }}
          className="animate__animated animate__fadeInUp"
        >
          First appearance: {hero.first_appearance}
        </h3>
        <hr style={{ color: "white" }} />
        <h3
          style={{ color: "white", textAlign: "center" }}
          className="animate__animated animate__fadeInUp"
        >
          Characters: {hero.characters}
        </h3>
        <hr style={{ color: "white" }} />
        <button
          className="btn btn-primary"
          style={{
            background: "white",
            border: "none",
            color: "black",
            margin: "auto",
            width: "80px",
            marginLeft: "50%",
          }}
          onClick={onNavigateBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
