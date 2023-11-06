import { useEffect, useState } from "react";

export function GithubUser({ name }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchGithubUser(name) {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (response.ok) {
        const userData = await response.json();
        setData(userData);
          setError(null);
          console.log(data);
      } else {
        setError("An error occurred in the server call");
      }
    } catch (error) {
      setError("An error occurred in your code", error);
    }
  }

  useEffect(() => {
    fetchGithubUser(name);
  }, [name]);

  return (
    <div>
      <h2>{data && data.login}</h2>
      <h3>{data && data.name}</h3>
      <h4>{data && data.avatar_url}</h4>
    </div>
  );
}