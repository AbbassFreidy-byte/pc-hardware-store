import React from "react";
import CategorySection from "../components/CategorySection";
import SectionIcon from "../assets/icons8-storage-48.png";
import { allProducts } from "../components/allProducts";

const Storage = () => {
  
  return (
    <CategorySection
      icon={SectionIcon}
      title="Storage Products"
      products={allProducts.filter(product => product.category === "Storage")}
    />
  );
};

export default Storage;
