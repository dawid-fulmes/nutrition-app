import styled from "styled-components";
import React, { Component } from "react";
import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

class Header extends Component {
  state = {
    mobileMenuOn: false,
  };
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
