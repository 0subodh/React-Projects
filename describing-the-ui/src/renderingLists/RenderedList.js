import { getImageUrl } from "./utils";
import { people } from "./data";

export default function RenderedList() {
  const listItems = people.map((person) => {
    return (
      <li key={person.id} style={{ listStyleType: "none", display: "flex" }}>
        <img
          src={getImageUrl(person)}
          alt={person}
          style={{ width: "70px", borderRadius: "50%" }}
        />
        <p>
          <strong>{person.name}:</strong>, {person.profession}, known for{" "}
          {person.accomplishment}
        </p>
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}
