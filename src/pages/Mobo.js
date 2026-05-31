import React from "react";
import CategorySection from "../components/CategorySection";
import ProductImage from "../assets/MoboBackground.png";
import SectionIcon from "../assets/icons8-gpu-64.png";
import { allProducts } from "../components/allProducts";

const Mobo = () => {
  
  return (
    <CategorySection
      PageBackground={ProductImage}
      icon={SectionIcon}
      title="Motherboard Products"
      products={allProducts.filter(product => product.category === "Motherboard")}
    />
  );
};

export default Mobo;
