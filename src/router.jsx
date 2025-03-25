import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import HeaderProject from "./components/HeaderProject";
import Footer from "./components/Footer";
import FooterProject from "./components/FooterProject";
import ProjectsPage from "./pages/ProjectsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<><Header /><Home /><Footer/></>}/>
      <Route path="/projects" element={<><HeaderProject /><ProjectsPage /><FooterProject/> </> } />
    </Routes>
  );
}

export default AppRoutes;
