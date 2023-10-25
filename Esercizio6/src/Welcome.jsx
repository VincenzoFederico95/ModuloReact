import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <p> Welcome, {name}! </p>
      {age ? <Age age={age} /> : "sorry, age not declared"}
    </>
  );
}
