import { Age } from "./Age";

export function Welcome({ name, age }) {
  return age > 18 && age < 65 && name === "Vicio" ? (
    <div>
      <p>Welcome, {name}! </p>
      <Age age={age} />
    </div>
  ) : null;
}
