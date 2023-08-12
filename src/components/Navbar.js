import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const styling = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#525252" : "",
    };
  };

  return (
    <nav className="navbar">
      <NavLink style={styling} className="navlink" to="/">
        Dashboard
      </NavLink>
      <NavLink style={styling} className="navlink" to="/departments">
        Departments
      </NavLink>
      <NavLink style={styling} className="navlink" to="/products-list">
        Products
      </NavLink>
    </nav>
  );
};
