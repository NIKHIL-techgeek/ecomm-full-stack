import React from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useAuth } from "../../context/Auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w- p-3">
              <h1>Admin Name : {auth?.user?.name}</h1>
              <h1>Admin Email : {auth?.user?.email}</h1>
              <h1>Admin City : {auth?.user?.address}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
