import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // refresh ke baad bhi user ka naam dikhana
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    setCurrentUser(null);
    navigate("/"); // front page pe bhej do
  };

  return (
    <div className="navbar">
      <div className="logo">🛡 CyberNavy</div>
      <div className="profile">
        <img
          src="https://th.bing.com/th/id/OIP.thDjj-NA5m996XG5HFhq0wHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="profile"
          className="profile-img"
        />

        {currentUser ? (
          <>
            <span className="username"> {currentUser}</span>
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
          </>
        ) : (
          <span className="signup" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        )}

        <span className="About">About</span>
        <span className="contact">Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
