import React from "react";
import CategorySection from "../components/CategorySection";
import ProductImage from "../assets/CaseBackground.png";
import SectionIcon from "../assets/icons8-case-64.png";
import { allProducts } from "../components/allProducts";

const Case = () => {
  
  return (
      <CategorySection
        PageBackground={ProductImage}
        icon={SectionIcon}
        title="Case Products"
        products={allProducts.filter(product => product.category === "Case")}
      />
  );
};

export default Case;
