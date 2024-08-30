import React from "react";
import Header from "./Header";
import "../components/Layout.scss";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
