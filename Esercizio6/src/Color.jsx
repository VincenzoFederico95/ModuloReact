export function Colors({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </>
  );
}
