import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar1 = () => {
  const auth = useAuth();
  const navBarStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
      <nav>
        <NavLink style={navBarStyles} to="/">
          Home
        </NavLink>
        &nbsp;
        <NavLink style={navBarStyles} to="/about">
          About
        </NavLink>
        &nbsp;
        <NavLink style={navBarStyles} to="/products">
          Products
        </NavLink>
        &nbsp;
        <NavLink style={navBarStyles} to="/profile">
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={navBarStyles} to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navbar1;
