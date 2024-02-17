// event handlers prop starts with on, here onClick is prop which takes event handler function later
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`playing ${movieName}`);
  }
  // component PlayButton passes onClick prop here to Button component as handlePlayClick
  return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading...")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName={"Inception"}></PlayButton>
      <UploadButton />
    </div>
  );
}
