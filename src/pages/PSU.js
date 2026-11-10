import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-psu-60.png";
import { allProducts } from "../components/allProducts";

const PSU = () => {
  
  return (
    <CategorySection
      icon={SectionIcon}
      title="PSU Products"
      products={allProducts.filter(product => product.category === "PSU")}
    />
  );
};

export default PSU;
