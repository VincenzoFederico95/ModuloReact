import { useState } from "react";

export function Container({ children, title }) {
  const [collapsed, setCollapsed] = useState(null);
  function handleCollapseButton() {
    setCollapsed((c) => !c);
  }
   
  return (
    <>
      {title}
      {collapsed && (
        <div style={{ border: "1px solid blue", backgroundColor: "beige" }}> 
          {children}
        </div>
      )}
      <button onClick={handleCollapseButton}> Show more </button>
    </>
  );
}
  //non ho scaricato Tailwind