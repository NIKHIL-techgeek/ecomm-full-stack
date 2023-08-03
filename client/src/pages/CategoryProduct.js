import axios from "axios";
import Layout from "./../Components/Layout/Layout.js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h1>hi</h1>
        <h4 className="text-center">{category?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
