import React from "react";
import Layout from "../Components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Policy = () => {
  return (
    <Layout title={"Privay Policy"}>
      <div className="col-md-6 ">
        <img
          src="/images/hero.png"
          
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
        <p className="text-justify mt-2">
          any query and info about prodduct feel free to call anytime we 24X7
          vaialible
        </p>
        <p>
          
        </p>
        <p className="mt-3">
          <BiMailSend /> : www.help@ecommerceapp.com
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : 012-3456789
        </p>
        <p className="mt-3">
          <BiSupport /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
