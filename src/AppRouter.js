import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Works from "../pages/Works";
import ErrorPage from "../pages/ErrorPage";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<Works />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
