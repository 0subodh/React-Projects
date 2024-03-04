// when you want a component to remember some information, but you don't want that information to trigger new renders, you can use ref

// importing useRef hook from react
import { useRef } from 'react';

export default function Reference() {
  const ref = useRef(0); // useRef returns mutable object {current: 0}

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <>
      <h1>{ref.current}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
