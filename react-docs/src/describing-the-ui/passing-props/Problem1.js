export default function Problem1() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        userName="Maria Skłodowska-Curie"
        imgSrc="szV5sdG"
        profession="physicist and chemist"
        num="4"
        discovered="polonium (chemical element)"
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
        Matteucci Medal"
      />
      <Profile
        userName="Katsuko Saruhashi"
        imgSrc="YfeOqp2"
        profession="geochemist"
        num="2"
        discovered="a method for measuring carbon dioxide in seawater"
        awards="Miyake Prize for geochemistry, Tanaka Prize"
      />
    </div>
  );
}

function Profile({ userName, imgSrc, profession, num, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{userName}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgSrc)}
        alt={userName}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {num} </b>({awards})
        </li>
        <li>
          <b>Discovered: {discovered}</b>
        </li>
      </ul>
    </section>
  );
}

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
