import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetail from "./pages/ProjectsPage/ProjectDetail";
import BlogPage from "./pages/Blog/BlogPage";
import EstatePage from "./pages/RealEstate/RealEstate";
import BuildPage from "./pages/Build/Build";
import Restoration from "./pages/Restoration/Restoration";
import Architecture from "./pages/Architecture/Architecture";
import Tourism from "./pages/Tourism/Tourism";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/projeler" element={<ProjectsPage />} />
        <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gayrimenkul" element={<EstatePage />} />
        <Route path="/insaat" element={<BuildPage />} />
        <Route path="/restorasyon-tadilat" element={<Restoration />} />
        <Route path="/mimarlik" element={<Architecture />} />
        <Route path="/turizm-yatirim" element={<Tourism />} />
      </Routes>
    </Router>
  );
}

export default App;
