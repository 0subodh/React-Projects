/*
React keeps track of which state belongs to which component based on their place in the UI tree. 

When you give a component state, you might think the state “lives” inside the component. But the state is actually held inside React. React associates each piece of state it’s holding with the correct component by where that component sits in the render tree.

In React, each component has its own isolated state.

React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. 

*/

import "./RenderTree.css";
import { useState } from "react";

export default function RenderTree() {
  const [showSecond, setShowSecond] = useState(false);
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {showSecond && counter}
      <label>
        <input
          type="checkbox"
          checked={showSecond}
          onChange={() => setShowSecond(!showSecond)}
        />
        Render the Second Counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
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
