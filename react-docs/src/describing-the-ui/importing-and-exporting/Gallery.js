import { Profile } from "./Profile.js"; // named import

// default export
export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
