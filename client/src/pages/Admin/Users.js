import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useAuth } from "../../context/Auth";
const Users = () => {
  // context
  
  // state


  return (
    <Layout title={"Dasboard-All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
