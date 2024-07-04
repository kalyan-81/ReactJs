import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const navBarStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};
const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Products" />
      <nav>
        <NavLink style={navBarStyles} to="features">
          features
        </NavLink>
        &nbsp;
        <NavLink style={navBarStyles} to="new">
          new
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
