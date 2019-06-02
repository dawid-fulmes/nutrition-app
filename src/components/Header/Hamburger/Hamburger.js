import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const barsDimensions = {
  height: 5,
  width: 30,
};

const StyledHamburger = styled.button`
  background-color: transparent;
  border: none;
  padding: ${2 * barsDimensions.height + 10 + "px"} 10px;
`;

const HamburgerBars = styled.div`
  width: ${() => barsDimensions.width + "px"};
  height: ${() => barsDimensions.height + "px"};
  background-color: ${({ theme, active }) =>
    active ? "transparent" : theme.colors.white};
  border-radius: 1px;
  position: relative;
  transition: background-color 0.5s;

  ::after,
  ::before {
    display: block;
    content: "";
    width: ${() => barsDimensions.width + "px"};
    height: ${() => barsDimensions.height + "px"};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
    position: absolute;
    transition: transform 0.5s;
  }

  ::after {
    top: ${() => -2 * barsDimensions.height + "px"};
    transform: translateY(
        ${({ active }) => (active ? 2 * barsDimensions.height + "px" : 0)}
      )
      rotate(${({ active }) => (active ? "405deg" : 0)});
  }

  ::before {
    top: ${() => 2 * barsDimensions.height + "px"};
    transform: translateY(
        ${({ active }) => (active ? -2 * barsDimensions.height + "px" : 0)}
      )
      rotate(${({ active }) => (active ? "-405deg" : 0)});
  }
`;

const Hamburger = ({ mobileMenuOn, toggleMobileMenu }) => {
  return (
    <StyledHamburger onClick={toggleMobileMenu}>
      <HamburgerBars active={mobileMenuOn} />
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  mobileMenuOn: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default Hamburger;
