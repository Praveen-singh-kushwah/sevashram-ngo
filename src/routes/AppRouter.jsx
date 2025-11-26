import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import EventGallery from "../pages/EventGallery";
import Contact from "../pages/Contact";
import Impact from "../pages/Impact";
import StoryDetail from "../pages/StoryDetail";
import Programs from "../pages/Programs";
import ProgramDetail from "../pages/ProgramDetail";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/impact/:slug" element={<StoryDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<EventGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
