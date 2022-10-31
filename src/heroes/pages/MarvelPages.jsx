import { HeroList } from "../components";

export const MarvelPages = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Marvel Heroes</h1>
      <hr style={{ color: "white" }} />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
