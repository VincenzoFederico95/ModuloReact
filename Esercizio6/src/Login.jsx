import { useState } from "react";

function useData() {
  return { password: "", username: "", remember: false };
}
export function Login({ onLogin }) {
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

  function handleLogin(e) {
    e.preventDefault();
    onLogin(data);
  }

  function handleReset() {
    setData(useData());
  }
  return (
    <div>
      <form onSubmit={handleLogin} action="#">
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleDataChange}
        />
        <input
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
        <button
          disabled={!data.username || !data.password}
          type="submit"
        
        >
          Login
        </button>

        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}