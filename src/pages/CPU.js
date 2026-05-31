import React from "react";
import CategorySection from "../components/CategorySection";
import ProductImage from "../assets/CpuBackground.png";
import SectionIcon from "../assets/icons8-processor-64.png";
import { allProducts } from "../components/allProducts";

const CPU = () => {

  return (
    <CategorySection
      PageBackground={ProductImage}
      icon={SectionIcon}
      title="CPU Products"
      products={allProducts.filter(product => product.category === "CPU")}
    />
  );
};

export default CPU;
