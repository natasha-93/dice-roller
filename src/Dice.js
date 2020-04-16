import React from "react";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";
import six from "./img/6.png";

const imgMap = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

function Dice({ number }) {
  return (
    <div
      style={{
        backgroundImage: `url("${imgMap[number]}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
        margin: "1rem",
        display: "inline-block",
      }}
    ></div>
  );
}

export default Dice;
