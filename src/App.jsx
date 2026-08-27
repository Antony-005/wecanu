import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import { initAnalytics, trackPageView } from "./utils/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Navigate to="/activities" replace />} />
          <Route path="/events" element={<Navigate to="/activities" replace />} />
          <Route path="/blog" element={<Navigate to="/activities" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Navigate to="/gallery" replace />} />
          <Route path="/team" element={<Team />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}