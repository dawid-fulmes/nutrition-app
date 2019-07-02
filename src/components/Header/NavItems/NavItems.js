import React from "react";
import NavItem from "./NavItem/NavItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNav = styled.nav`
  display: ${({ isDesktop }) => (isDesktop ? "none" : "block")};
  flex-grow: 1;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isDesktop }) => (isDesktop ? "block" : "none")};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  font-size: 2rem;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const NavItems = ({ isDesktop, closeMenu, isAuth }) => {
  return (
    <StyledNav isDesktop={isDesktop}>
      <StyledUl>
        <NavItem path="/search" label="Search" closeMenu={closeMenu} />
        <NavItem path="/about" label="About" closeMenu={closeMenu} />
        <NavItem
          path={isAuth ? "/logout" : "/auth"}
          label={isAuth ? "Logout" : "Auth"}
          closeMenu={closeMenu}
        />
      </StyledUl>
    </StyledNav>
  );
};

NavItems.propTypes = {
  isDesktop: PropTypes.bool,
  closeMenu: PropTypes.func,
  isAuth: PropTypes.bool.isRequired,
};

export default NavItems;
