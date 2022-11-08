import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetail from '../Layout/ProductDetail';
import ProductList from '../Layout/ProductList';

const Products = () => {

  const [productsState, setProducts] = useState([])

  useEffect(() => {
      (async () => {
        const API_URL = "https://dummyjson.com/products";
        const productsResponse = await fetch(API_URL)
        .then(response => response.json());
        setProducts(productsResponse.products)
      })();
  },[]);

  return (
    <div className='container-fluid'>
      <div className='row gap-1'>
      <Routes>
        <Route
          index
          element={<ProductList products={productsState} />}
        />
        <Route path=":productID" element={<ProductDetail />} />
      </Routes>
      </div>
    </div>
  );
}

export default Products