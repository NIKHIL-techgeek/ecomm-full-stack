import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Helmet from "react-helmet";
const Layout = (props, title, keywords, author) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />

        <title>My Title</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
