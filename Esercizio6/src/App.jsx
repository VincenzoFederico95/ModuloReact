import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser/>} />
        <Route path="/:name" element={<Welcome />} />
      </Routes>

    </>

  );
};

export default App;
