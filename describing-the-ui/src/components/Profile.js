import "./Profile.css";
import { getImageUrl } from "./utils";

// props are like arguments in functions
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={50} // what is the unit here?
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
