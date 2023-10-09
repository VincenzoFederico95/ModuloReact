
import { Age } from "./Age";

export function Welcome({name, age}) {
  return (
    <>
  <p> Welcome, {name}! </p>
  {age > 18 ? <Age age={age} /> : "sorry, too young for this application"}
  </>
  );
}


