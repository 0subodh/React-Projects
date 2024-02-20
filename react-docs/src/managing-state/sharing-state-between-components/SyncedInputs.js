import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  return (
    <>
      <Input
        label="First input"
        text={text}
        handleChange={(e) => setText(e.target.value)}
      />
      <br />
      <Input
        label="Second input"
        text={text}
        handleChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

function Input({ label, text, handleChange }) {
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
