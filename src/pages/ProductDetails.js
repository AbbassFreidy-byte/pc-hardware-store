import React from "react";
import { Link } from "react-router-dom";
import HandleAddToCart from "../components/HandleAddToCart";
import "../styles/ProductDetails.css";

const ProductPages = ({ products }) => {
  return (
    <div className="product-details-page">
      {products.map((product) => (
        <div key={product.id} className="product-details">
          <img src={product.image} alt={product.alt} />
          <h2>{product.name}</h2>
          <p>{product.title}</p>
          {product.description && <p>{product.description}</p>}
          <div className="product-price">
            {product.price}
          </div>
          <HandleAddToCart product={product} />
          <ul className="product-specs">
            <h3>Specifications:</h3>
            {product.specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductPages;
