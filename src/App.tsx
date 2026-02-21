import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </Router>
  );
}
