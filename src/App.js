import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./container";
import { Navbar } from "./components";
import HomePage from "./pages/HomePage";
import PolicyPage from "./pages/PolicyPage";
import "./App.css";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
