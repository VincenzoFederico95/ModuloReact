import React, { useState, useRef } from "react";
import { GithubUser } from "./GitHubUser";

const GithubUsersList = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userList, setUserList] = useState([]);
  const inputRef = useRef();

  const handleSearch = () => {
    setUserList((prevUserList) => [...prevUserList, searchUser]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Cerca Utenti GitHub</h1>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <button onClick={handleSearch}>Cerca Utente</button>
      </div>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <GithubUser selectedUser={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsersList;