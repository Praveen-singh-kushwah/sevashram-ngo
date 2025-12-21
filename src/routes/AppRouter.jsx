import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import GetInvolved from "../pages/GetInvolved";
import Donate from "../pages/Donate";
import Volunteer from "../pages/Volunteer";
import Partner from "../pages/Partner";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/impact/:slug" element={<StoryDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<EventGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate/*" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
