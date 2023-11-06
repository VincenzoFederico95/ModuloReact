import { useState, useEffect } from "react";

export function GithubUser({ selectedUser }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGithubUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${selectedUser}`);
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

    fetchGithubUser();
  }, [selectedUser]);

  return (
    <div>
     
      {data ? (
        <div>
          <h2>{data.login}</h2>
          <h3>{data.name}</h3>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
      ) : 'Loading...'
    
      }
    </div>
  );
}