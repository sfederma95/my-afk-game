import React, { useEffect, useState } from "react";
import Mountains from "./img/bgs/mountains.png";
import { dummyCharacters } from "./temp/characters";
import { Battles } from "./helpers/battle";

export const Battle = () => {
  const [battle, setBattle] = useState(null);
  useEffect(() => {
    setBattle(new Battles(dummyCharacters));
  }, []);
  const doBattle = () => {
    if (battle) {
      battle.init();
    }
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
