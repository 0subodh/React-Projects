import { useState, useEffect } from "react";

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

export default function Clock() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <div>
      <p>
        Pick a color:{" "}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <ClockInterface color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

function ClockInterface({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
