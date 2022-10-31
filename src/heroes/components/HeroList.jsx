import { HeroCard } from "./";
import { getHeroByPublisher } from "../helpers";
import { useMemo } from "react";
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-4">
      {heroes.map((element) => (
        <HeroCard key={element.id} {...element} />
      ))}
    </div>
  );
};
