import React, { useState } from "react";
import "../styles/AuthPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signing up: ${username}, ${email}, ${password}`);
  };

  return (
    <div className="auth-Body">
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
     </div>
    </div>
  );
};

export default SignupPage;
