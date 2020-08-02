import React, { useContext } from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/user">ALL USERS</NavLink>
      </li>
      <li>{auth.isLoggedIn && <NavLink to="/u1/places">MY PLACES</NavLink>}</li>
      <li>
        {auth.isLoggedIn && <NavLink to="/places/new">ADD PLACE</NavLink>}
      </li>
      <li>{!auth.isLoggedIn && <NavLink to="/auth">AUTHENTICATE</NavLink>}</li>
    </ul>
  );
};

export default NavLinks;
