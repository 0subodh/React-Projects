import "./Gallery.css";

function Profile() {
  return (
    <img
      src={
        "https://thumbs.dreamstime.com/z/sylvester-stallone-figure-madame-tussauds-los-angeles-48151361.jpg?w=992"
      }
      alt="Sylvester Stallone"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h3>Amazing Sylvester Stallone</h3>
      <div className="profile">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
