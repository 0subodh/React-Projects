import "./MultipleProps.css";

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

const scientists = [
  {
    imageId: "szV5sdG",
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    discovery: "polonium (chemical element)",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
  },
  {
    imageId: "YfeOqp2",
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    discovery: "a method for measuring carbon dioxide in seawater",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
  },
];

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 50,
}) {
  return (
    <section className="profile2">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function MultipleProps() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile {...scientists[0]} />
      <Profile {...scientists[1]} />
    </div>
  );
}
