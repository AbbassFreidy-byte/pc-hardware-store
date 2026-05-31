import React from "react";
import CategorySection from "../components/CategorySection";
import ProductImage from "../assets/CoolingBackground.png";
import SectionIcon from "../assets/icons8-fan-60.png";
import { allProducts } from "../components/allProducts";

const Cooling = () => {
  
  return (
    <CategorySection 
      PageBackground={ProductImage} 
      icon={SectionIcon} 
      title="Cooling Products" 
      products={allProducts.filter(product => product.category === "Cooling")}
    />
  );
};

export default Cooling;
