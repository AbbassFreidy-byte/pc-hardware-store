import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-ram-64.png";
import { allProducts } from "../components/allProducts";

const RAM = () => {
  
  return (
    <CategorySection
      icon={SectionIcon}
      title="RAM Products"
      products={allProducts.filter(product => product.category === "RAM")}
    />
  );
};

export default RAM;
