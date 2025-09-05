import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message || "Something went wrong");

      if (res.ok) {
        localStorage.setItem("user", data.username);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to CyberNavy</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p className="signup-link">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/signup")}>Create account</span>
      </p>
    </div>
  );
};

export default Login;
