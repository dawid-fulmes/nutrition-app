import styled from "styled-components";
import React, { Component } from "react";
import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  height: 70px;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Hamburger />
        <MobileMenu />
      </StyledHeader>
    );
  }
}

export default Header;
