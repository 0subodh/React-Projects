import { useState } from "react";

export default function Problem1() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form text={text} setText={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form text={text} setText={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setShowHint(true);
        }}
      >
        Show hint
      </button>
    </div>
  );
}

function Form({ text, setText }) {
  return <textarea value={text} onChange={setText} />;
}
