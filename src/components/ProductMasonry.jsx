import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from "uuid/v1";
import CardColumns from "react-bootstrap/CardColumns";
import ProductCard from './ProductCard';


const url = "https://gist.githubusercontent.com/josecarneiro/55d29956bce9a8aaad9fe0cdd2279739/raw/b859ff472c97ee037636247128e9c87115782787/products.json";

const ProductMasonry = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <CardColumns>
      {products.map(prod => (
        <ProductCard prod={prod} key={uuid()}/>
      ))}
    </CardColumns>
  )
}

export default ProductMasonry;
