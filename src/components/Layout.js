import React from "react";
import Header from "./Header";
import Title from "./Title";
import "../components/Layout.scss";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <Title />

      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
