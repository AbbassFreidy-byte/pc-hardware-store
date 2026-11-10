import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-processor-64.png";
import { allProducts } from "../components/allProducts";

const CPU = () => {

  return (
    <CategorySection
      icon={SectionIcon}
      title="CPU Products"
      products={allProducts.filter(product => product.category === "CPU")}
    />
  );
};

export default CPU;
