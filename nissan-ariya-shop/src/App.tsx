import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Accessories from "./pages/Accessories";
import Maintenance from "./pages/Maintenance";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/products/accessories" element={<Layout><Accessories /></Layout>} />
        <Route path="/products/maintenance" element={<Layout><Maintenance /></Layout>} />
      </Routes>
    </Router>
  );
}

