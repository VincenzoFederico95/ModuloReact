import { useEffect, useRef } from "react";

export function FocusableInput() {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const inputRef = useRef(null);

  return <input type="text" ref={inputRef} />;
}
