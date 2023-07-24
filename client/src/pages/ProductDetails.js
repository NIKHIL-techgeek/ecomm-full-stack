import { Layout } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // get products
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //   get similar products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/realted-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container">
        <div className="cold-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
      </div>
      <div className="cold-md-6 ">
        <h1 className="text-center">Product details</h1>
        <h6>Name : {product.name}</h6>
        <h6>Description : {product.description}</h6>
        <h6>Price : {product.price}</h6>
        {/* <h6>Category : {product.category.name}</h6> */}
        <button className="btn btn-secondary ms-1">ADD TO CART</button>
      </div>
      <div className="row">
        <h1>Similar Product</h1>
        {JSON.stringify(relatedProducts, null, 4)}
      </div>
    </Layout>
  );
};

export default ProductDetails;
