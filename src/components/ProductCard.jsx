import React from 'react';
import "../styles/ProductCard.css";
import ProductPages from "../pages/ProductDetails";
import HandleAddToCart from "./HandleAddToCart";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, alt, title, name, specs, price }) => {
const products = [{ id, image, alt, title, name, specs, price }];

  return (
    <div className="product-card">
      <img src={image} alt={alt} />
      <div className="product-title">{title}</div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        {specs.map((spec, i) => (
          <div key={i} className="product-spec">{spec}</div>
        ))}
        <div className="product-price">{price}</div>
        <Link to={`/product/${id}`}>
          <button
            style={{ backgroundColor: "rgb(16, 0, 245)" }}
            className="product-btn"
          >
            View Details
          </button>
        </Link>
        <HandleAddToCart product={{ id, image, title, name, specs, price }} />
      </div>
    </div>
  );
};

export default ProductCard;
