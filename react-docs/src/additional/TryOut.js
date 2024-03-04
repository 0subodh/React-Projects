import { useState } from "react";

export default function TryOut() {
  const [post, setPosts] = useState("");
  const [count, setCount] = useState(0);

  const getData = async () => {
    const postId = Math.ceil(Math.random() * 10);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${postId}`
    );
    const data = await res.json();
    setPosts(data);
    setCount(count + 1);
  };

  return (
    <>
      <h3>Count:{count}</h3>
      <div>Data from Server: {post && JSON.stringify(post)}</div>
      <button onClick={getData}>Get POST</button>
    </>
  );
}
