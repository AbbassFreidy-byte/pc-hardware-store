import React from "react";
import CategorySection from "../components/CategorySection";
import ProductVideo from "../assets/videos/ProductVid.mp4";
import GamingPCLogo from "../assets/icons8-fidget-spinner-96.apng.png";
import MiniPCLogo from "../assets/icons8-mini-98.png";
import LaptopLogo from "../assets/icons8-laptop-96.apng.png";
import BackgroundMedia from '../components/BackgroundMedia';
import { allProducts } from "../components/allProducts";

const ProductsPage = () => {

  return (
<>
    <BackgroundMedia src={ProductVideo} />
        <CategorySection 
          icon= {GamingPCLogo} 
          title="Gaming PCs" 
          products={allProducts.filter(product => product.category === "Gaming PC")} 
        />
        <CategorySection 
          icon= {MiniPCLogo}
          title="Compact & Mini PCs" 
          products={allProducts.filter(product => product.category === "Mini PC")} 
        />
        <CategorySection 
          icon= {LaptopLogo}
          title="Laptops & Notebooks" 
          products={allProducts.filter(product => product.category === "Laptop")} 
        />
      </>
  );
};

export default ProductsPage;
