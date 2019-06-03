import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, path }) => {
  return (
    <li>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
