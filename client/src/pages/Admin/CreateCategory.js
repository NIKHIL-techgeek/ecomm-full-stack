import React ,{useEffect,useState} from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import toast from "react-hot-toast";
const CreateCategory = () => {
  const [category,setCategory]=useState([]);

  // get all category
  const getAllCategory=async ()=>{
    try {
      
    } catch (error) {
      console.log(error); 
      toast.error("Something went wrong in getting category")
    }
  }
  return (
    <Layout title={"Dashboard-Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
