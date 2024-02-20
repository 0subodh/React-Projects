import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchBar query={query} handleChange={(e) => setQuery(e.target.value)} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
