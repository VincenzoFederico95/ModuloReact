export function Container({ children, title }) {
  return (
    <>
      {title}
      <div style={{ border: "1px solid blue", backgroundColor: "beige" }}>
        {children}
      </div>
    </>
  );
}
  //non ho scaricato Tailwind