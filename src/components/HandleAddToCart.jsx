import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/HandleAddToCart.css";

const HandleAddToCart = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: product.id, image: `${process.env.PUBLIC_URL}/${product.image}`, title: product.title, name: product.name, specs: product.specs, price: product.price });
    alert(`${product.name} has been added to your cart!`);
  };

  return <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>;
};

export default HandleAddToCart;
