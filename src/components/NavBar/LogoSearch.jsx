import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "../../styles/LogoSearch.css";
import { allProducts } from "../allProducts";

const LogoSearch = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = query
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.specs.some(spec => spec.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="d-flex flex-column align-items-center position-relative">
      <h1 className="m-0">
        <Link to="/">
          <img src={logo} height="40" draggable="false" alt="Logo" />
        </Link>
      </h1>
      <form className="d-flex justify-content-center" onSubmit={(e) => e.preventDefault()}>
        <div className="search-pill d-flex">
          <input
            type="search"
            className="search-input"
            placeholder="Enter Hardware Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="submit">🔍</button>
        </div>
      </form>

      {filteredProducts.length > 0 && (
        <div className="search-results-box">
          {filteredProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="search-result-item"
            >
              <img src={product.image} alt={product.alt} height="40" />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogoSearch;
