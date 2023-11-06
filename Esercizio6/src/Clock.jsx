import { useContext, useEffect, useState } from "react";
import "./clock.scss";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2  className="clock" >
       {language === 'IT' ? 'Ora esatta: ' : 'Current time: '} {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
}


//il componente Clock non può più accedere al Context del componente LanguageContext, e quindi accede al valore predefinito dato all'hook "useContext".