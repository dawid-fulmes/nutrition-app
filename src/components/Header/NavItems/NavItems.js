import React from "react";
import NavItem from "./NavItem/NavItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const linksConfig = [
  { label: "Main", path: "/" },
  { label: "About", path: "/about" },
  { label: "Search", path: "/search" },
];

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

const NavItems = ({ isDesktop, closeMenu }) => {
  return (
    <StyledNav isDesktop={isDesktop}>
      <StyledUl>
        {linksConfig.map(config => (
          <NavItem {...config} key={config.label} closeMenu={closeMenu} />
        ))}
      </StyledUl>
    </StyledNav>
  );
};

NavItems.propTypes = {
  isDesktop: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export default NavItems;
