// src/components/ProductList.js
import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  return (
    <div className="product-list">
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div className="grid">
        {data?.slice(0, 8).map((product) => (
          <div key={product.id} className="card">
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
