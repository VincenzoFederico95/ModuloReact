export function CounterDisplay({ count, counterRef }) {
    const CounterStyle = {
      padding: "20px",
      backgroundColor: "bisque",
      color: "hotPink",
      display: "flex",
      width: "50px",
      justifyContent: "center",
    };
  
    return (
      <h2 style={CounterStyle} ref={counterRef}>
        {count}
      </h2>
    );
  }