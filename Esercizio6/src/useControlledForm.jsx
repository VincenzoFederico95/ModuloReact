import { useState } from "react";

const useControlledForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleUpdateUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  return {
    password,
    username,
    handleUpdatePassword,
    handleUpdateUsername,
  };
};

export default useControlledForm;