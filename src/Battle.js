import React, { useEffect, useState } from "react";
import Mountains from "./img/bgs/mountains.png";
import { dummyCharacters } from "./temp/characters";

export const Battle = () => {
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
      <button>Start</button>
    </div>
  );
};
