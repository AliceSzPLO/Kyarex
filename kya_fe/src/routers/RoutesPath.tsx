import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Character from "../pages/Character/Character";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/character" element={<Character />} />

      </Routes>
    </>
  );
}

export default RoutesPath;
