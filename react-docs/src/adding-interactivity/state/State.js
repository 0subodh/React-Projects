import { sculptureList } from "./data";
import { useState } from "react";

// changes to the local variable won't trigger renders
export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    console.log(index, sculptureList.length);
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
      setShowMore(false);
    } else {
    }
  }

  function handleRightClick() {
    if (index <= 0) return;
    setIndex(index - 1);
    setShowMore(false);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleClick}
          disabled={index === sculptureList.length - 1}
        >
          Next
        </button>
        <button onClick={handleRightClick} disabled={index === 0}>
          Previous
        </button>
      </div>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button style={{ display: "block" }} onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} Details
      </button>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
