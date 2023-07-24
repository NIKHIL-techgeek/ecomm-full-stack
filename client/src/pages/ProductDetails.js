import { Layout } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    // get products
    const params =useParams();
    const [product,setProduct] = useState({});
    const getProduct = async ()=>{
        try {
            const {data} =await axios.get(`/api/v1/product/get-product/${params.slug}`)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Layout>
        <h1>Product Details</h1>
    </Layout>
  )
}

export default ProductDetails