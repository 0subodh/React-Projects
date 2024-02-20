import "./styles.css";
import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const sendMail = () => {
    setTimeout(() => {
      setIsClicked(!isClicked);
    }, 1500);
  };
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={sendMail}>Send to {contact.email}</button>
      {isClicked && <h3>Thank You, your message received</h3>}
    </section>
  );
}
