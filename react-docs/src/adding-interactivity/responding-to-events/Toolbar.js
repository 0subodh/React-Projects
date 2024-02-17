function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <>
      <AlertButton message={"playing movie"}>Play Movie</AlertButton>
      <AlertButton message={"uploading image"}>Upload Image</AlertButton>
    </>
  );
}
