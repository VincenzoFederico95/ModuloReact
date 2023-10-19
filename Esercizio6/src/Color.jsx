function Color({ item }) {
    return (
      <>
        <li> {item.name} </li>
      </>
    );
  }
  
  export function Colors({ items }) {
    {
      return (
        <ul>
          {items.map((item) => (
            <Color key={item.id} item={item} />
          ))}
        </ul>
      );
    }
  }