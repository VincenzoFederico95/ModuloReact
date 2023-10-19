import { useEffect, useRef } from "react";

export function StrictMode() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("The component is mounted for the first time");
    } else {
      console.log("Second mounting for debug");
    }
  }, []);
}