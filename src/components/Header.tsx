import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <Link style={{ color: "white" }} to="/">
          LOGO
        </Link>
      </div>
      <div>
        <Link style={{ color: "white" }} to="/">
          Decks
        </Link>
      </div>
      <div>
        <Link style={{ color: "white" }} to="/">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
