import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
// import Works from "../pages/Works";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
