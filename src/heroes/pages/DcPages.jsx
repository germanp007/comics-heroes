import { HeroList } from "../components";

export const DcPages = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Dc Heroes</h1>
      <hr style={{ color: "white" }} />
      <HeroList publisher="DC Comics" />
    </>
  );
};
