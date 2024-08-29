import React from "react";
import Header from "./Header";
import Title from "./Title";
import "../components/Layout.scss";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="head">
        <Title />
        <Header />
      </div>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
