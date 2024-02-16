import "./App.css";
import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h3>{user.name}</h3>
      <img
        src={user.imageUrl}
        height={user.imageSize}
        alt={" image of " + user.name}
        style={{ borderRadius: "50%" }}
      />
    </>
  );
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function DisplayList() {
  const listItems = products.map((product) => (
    // react uses key to determine whether a component needs to be updated or not
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{listItems}</ul>;
}

function Button() {
  const [count, setCount] = useState(1);
  const handleClickLike = () => setCount(count + 1);
  const handleClickDislike = () => setCount(count - 1);
  return (
    <div>
      <button onClick={handleClickLike}>like </button>
      {count}
      <button onClick={handleClickDislike}>dislike </button>
    </div>
  );
}

function SingleButton({ value, handleClick }) {
  return <button onClick={handleClick}>Button + {value}</button>;
}

// counter that gets updated together
function TogetherCounter() {
  const [value, setValue] = useState(0);
  const handleClick = () => setValue(value + 1);
  return (
    <div>
      <SingleButton value={value} handleClick={handleClick} />
      <SingleButton value={value} handleClick={handleClick} />
    </div>
  );
}

export default function App() {
  return (
    <div className="main">
      <h1>I am learning React</h1>
      <Profile />
      <br />
      <Button />
      <DisplayList />
      <TogetherCounter />
    </div>
  );
}
