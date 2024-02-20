/*
Always declare component functions at the top level, and don’t nest their definitions.

*/

import "./ComponentAtSamePosition.css";
import { useState } from "react";

export default function ComponentAtSamePosition() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}

      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={() => setIsFancy(!isFancy)}
        />
        Use Fancy Styling
      </label>
    </>
  );
}

function Counter({ isFancy = false }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (isFancy) {
    className += " fancy";
  }
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1 className="score">{score}</h1>
      <button className="button" onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
