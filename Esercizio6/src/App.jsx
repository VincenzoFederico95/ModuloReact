

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/counter" element={< Counter/>} />
      </Routes>
    </>
  );
};
