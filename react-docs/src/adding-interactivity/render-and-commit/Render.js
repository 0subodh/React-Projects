/*
Rendering is React calling your Component
On initial render, React call the root component
On subsequent renders, React will call the function Component whose state update triggered the render

1. Trigger (caused by state change)
2. Render (calling your React component)
3. Commit (update DOM)
4. Repaint the screen by Browser

*/

import "./Render.css";

import { useState, useEffect } from "react";

function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Render() {
  const time = useTime();
  return <Clock time={time.toLocaleTimeString()} />;
}
