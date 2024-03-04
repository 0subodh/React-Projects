import { useState } from 'react';

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {toggle ? 'On' : 'Off'}
    </button>
  );
}
