import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-fan-60.png";
import { allProducts } from "../components/allProducts";

const Cooling = () => {
  
  return (
    <CategorySection 
      icon={SectionIcon} 
      title="Cooling Products" 
      products={allProducts.filter(product => product.category === "Cooling")}
    />
  );
};

export default Cooling;
