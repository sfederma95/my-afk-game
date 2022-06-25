import React, { useEffect, useState } from "react";
import Mountains from "./img/bgs/mountains.png";
import lootTable from "./helpers/lootTable";
import { dummyTable } from "./temp/table";

export const Draw = () => {
  const [table, setTable] = useState(null);
  const [rollCount, setRollCount] = useState(0);
  const createTable = () => {
    const table = new lootTable();
    for (let item in dummyTable) {
      table.addToTable(dummyTable[item]);
    }
    return table;
  };
  useEffect(() => {
    setTable(createTable());
  }, []);
  const choose = () => {
    if (table) {
      let item;
      if (rollCount >= 10) {
        item = table.guaranteedRareDrop();
        setRollCount(0);
      } else {
        item = table.choose();
        setRollCount(rollCount + 1);
      }
      return item;
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
      <button onClick={choose}>Draw</button>
    </div>
  );
};
