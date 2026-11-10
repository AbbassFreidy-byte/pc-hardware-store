import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../components/allProducts";
import ProductPages from "./ProductDetails";
const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id);

  return (
    <div>
    {product ? (
    <ProductPages products={[product]} />
  ) : (
    <p>Product not found.</p>
  )}</div>
  );
};

export default ProductDetail;
