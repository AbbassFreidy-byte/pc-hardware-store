import React from "react";
import CategorySection from "../components/CategorySection";
import ProductImage from "../assets/GpuBackground.png";
import SectionIcon from "../assets/icons8-gpu-64.png";
import { allProducts } from "../components/allProducts";

const GPU = () => {
  
  return (
    <CategorySection
      PageBackground={ProductImage}
      icon={SectionIcon}
      title="GPU Products"
      products={allProducts.filter(product => product.category === "GPU")}
    />
  );
};

export default GPU;
