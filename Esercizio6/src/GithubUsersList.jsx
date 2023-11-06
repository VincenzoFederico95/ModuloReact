import { useState, useRef } from "react";

import { Link, Outlet } from "react-router-dom";

const GithubUsersList = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userList, setUserList] = useState([]);
  const inputRef = useRef();

  const handleSearch = () => {
   setUserList((prevUserList) => [...prevUserList, { login: searchUser }]);
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
        {userList && userList.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default GithubUsersList;