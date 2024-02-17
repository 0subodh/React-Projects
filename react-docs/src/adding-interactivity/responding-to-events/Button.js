export default function Button() {
  function handleClick() {
    alert("I am clicked");
  }

  return (
    // JavaScript inside the JSX {  } executes right away.
    <button onClick={handleClick} style={{ cursor: "pointer" }}>
      Click Me
    </button>
  );
}
