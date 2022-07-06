import React, { useEffect, useState } from "react";
import Mountains from "./img/bgs/mountains.png";
import { dummyTeam } from "./temp/characters";
import { Battles } from "./helpers/battle";

export const Battle = () => {
  const [battle, setBattle] = useState(null);
  useEffect(() => {
    if (!battle) {
      const [team1, team2] = dummyTeam;
      setBattle(new Battles(team1, team2));
    }
  }, []);
  const doBattle = () => {
    battle.init();
    setBattle(null);
  };
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${Mountains})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <button onClick={doBattle}>Start</button>
    </div>
  );
};
