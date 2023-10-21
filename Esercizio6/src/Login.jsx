import { useState } from "react";

export function Login({ onLogin }) {
  function useData() {
    return { password: "", username: "", remember: false };
  }
  const [data, setData] = useState(useData());

  function handleDataChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const type = e.target.type;

    setData((data) => {
      return { ...data, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleLogin() {
    onLogin(data);
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleDataChange}
      />
      <input
        style={{ backgroundColor: data.password.length > 8 ? "green" : "red" }}
        type="password"
        name="password"
        value={data.password}
        onChange={handleDataChange}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={handleDataChange}
      />
      <button disabled={!data.username || !data.password} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}