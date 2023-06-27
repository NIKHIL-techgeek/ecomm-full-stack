import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link, NavLink } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page not found</h2>
        <NavLink to="/" className="pnf-btn">Go back</NavLink>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
