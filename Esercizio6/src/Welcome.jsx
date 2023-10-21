import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <p className="paragraph">Welcome, {name}! </p>
      {18 < age < 65 ? (
        <Age age={age} />
      ) : (
        "too young or too old for this application"
      )}
    </>
  );
}
