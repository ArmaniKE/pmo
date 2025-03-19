import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import HeaderProject from "./components/HeaderProject";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<><Header /><Home /></>}/>
      <Route path="/projects" element={<><HeaderProject /> <Projects /> </> } />
    </Routes>
  );
}

export default AppRoutes;
