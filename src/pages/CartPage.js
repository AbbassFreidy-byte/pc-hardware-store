import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartPageBackground from "../assets/cartImage.png";
import BackgroundMedia from "../components/BackgroundMedia";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <section className="cart-container">
      <BackgroundMedia src={CartPageBackground} />
      <h2>Your Cart</h2>
      <div className="cart-box">
        {(
          <div className="cart-items-details">
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} width="80" />
                  <div className="cart-item-description">{item.specs + " "}</div>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          <div className="cart-tabs">
             <h3>Total: ${total.toFixed(2)}</h3>
             <button onClick={clearCart}>Clear Cart</button>
             <button onClick>Proceed to Checkout</button>
           </div>
          </div> 
        )}
      </div>
    </section>
  );
};

export default CartPage;
