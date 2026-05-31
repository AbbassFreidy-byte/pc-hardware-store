import { Link } from "react-router-dom";
import React, { useState } from "react";
import UserCartLogo from "../../assets/icons8-user-96.apng.png";
import "../../styles/UserCart.css";

const UserCart = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out.");
  };

  return (
    <details className="userCart-box">
      <summary>
        <img src={UserCartLogo} height="50" alt="User Icon" />
      </summary>
      <div className="CardOptions">
        <h3>User Access</h3>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="type admin for demo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="type 1234 for demo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <div className="button-group">
              <button
                type="submit"
                style={{ backgroundColor: "rgba(2, 2, 139, 0.63)" }}
              >
                Log In
              </button>
              <Link to="/signup">
                <button
                  type="button"
                  style={{ backgroundColor: "rgba(67, 26, 26, 0.63)" }}
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/cart">
                <button
                  type="button"
                  style={{ backgroundColor: "rgba(0, 88, 0, 0.63)" }}
                >
                  View Cart
                </button>
              </Link>
            </div>
          </form>
        ) : (
          <div className="button-group">
            <button
              type="button"
              style={{ backgroundColor: "rgba(139, 0, 0, 0.63)" }}
              onClick={handleLogout}
            >
              Log Out
            </button>
            <Link to="/cart">
              <button
                type="button"
                style={{ backgroundColor: "rgba(0, 88, 0, 0.63)" }}
              >
                View Cart
              </button>
            </Link>
          </div>
        )}
      </div>
    </details>
  );
};

export default UserCart;
