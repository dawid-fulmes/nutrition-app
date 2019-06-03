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

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isDesktop }) => (isDesktop ? "block" : "none")};
  }
`;

const NavItems = ({ isDesktop }) => {
  return (
    <StyledNav isDesktop={isDesktop}>
      <ul>
        {linksConfig.map(config => (
          <NavItem {...config} key={config.label} />
        ))}
      </ul>
    </StyledNav>
  );
};

NavItems.propTypes = {
  isDesktop: PropTypes.bool,
};

export default NavItems;
