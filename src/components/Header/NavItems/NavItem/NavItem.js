import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;
  padding: 5px 10px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    transform: translateX(-100%);
    transition: transform 0.25s;
  }

  &:hover::after,
  &:active::after {
    transform: translateX(-50%);
  }
  &.active::after {
    transform: translateX(0);
  }
`;

const NavItem = ({ label, path, closeMenu }) => {
  return (
    <li onClick={closeMenu}>
      <StyledNavLink to={path} exact>
        {label}
      </StyledNavLink>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  closeMenu: PropTypes.func,
};

export default NavItem;
