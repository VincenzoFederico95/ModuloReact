import { useState, useEffect } from "react";

const useGitHubUser = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        setData(userData);
        setError(null);
      } else {
        setError("An error occurred in the server call");
      }
    } catch (error) {
      setError("An error occurred in your code", error);
    }
  }

  useEffect(() => {
    if (name) {
      fetchGithubUser(name);
    }
  }, [name]);

  return {
    data,
    error,
  };
};

export default useGitHubUser;