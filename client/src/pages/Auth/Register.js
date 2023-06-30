import React,{useState} from "react";
import Layout from "../../Components/Layout/Layout";

const Register = () => {
    const [name,setName]= useState("")
    const [email,setemail]= useState("")
    const [password,setpassword]= useState("")
    const [phone,setphone]= useState("")
    const [address,setaddress]= useState("")
  return (
    <Layout title="Register -- Ecommer App">
      <div className="register">
        <h1>Register Page</h1>
        <form>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone No"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Address"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
