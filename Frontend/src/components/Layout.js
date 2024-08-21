import React from "react";
import Header from "./Header";
import Title from "./Title";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Title />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
