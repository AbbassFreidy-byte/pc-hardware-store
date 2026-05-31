import React from "react";
import ProductCard from "./ProductCard";
import BackgroundMedia from "./BackgroundMedia";
import "../styles/ProductsPage.css";
import "../styles/CategorySection.css";

const CategorySection = ({ PageBackground, icon, title, products }) => {
  return (
    <div className="category-section">
      <BackgroundMedia src={PageBackground}/>
      <div className="products-container">
      <h3 className="category-title">
      <img src={icon} alt={`${title} Icon`} height="40" /> {title}
      </h3>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        )
        )}
      </div>
      </div>
    </div>
  );
};

export default CategorySection;
