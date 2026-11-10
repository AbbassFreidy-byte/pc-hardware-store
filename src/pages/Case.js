import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-case-64.png";
import { allProducts } from "../components/allProducts";

const Case = () => {
  
  return (
      <CategorySection
        icon={SectionIcon}
        title="Case Products"
        products={allProducts.filter(product => product.category === "Case")}
      />
  );
};

export default Case;
