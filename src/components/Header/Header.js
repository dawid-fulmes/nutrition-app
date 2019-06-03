import styled from "styled-components";
import React, { Component } from "react";
import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavItems from "./NavItems/NavItems";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999;
`;

class Header extends Component {
  state = {
    mobileMenuOn: false,
  };
  toggleMobileMenuHandler = () => {
    this.setState(prevState => ({ mobileMenuOn: !prevState.mobileMenuOn }));
  };
  render() {
    const { mobileMenuOn } = this.state;
    const { toggleMobileMenuHandler } = this;
    return (
      <>
        <StyledHeader>
          <Hamburger
            mobileMenuOn={mobileMenuOn}
            toggleMobileMenu={toggleMobileMenuHandler}
          />
          <NavItems />
        </StyledHeader>
        <MobileMenu visible={mobileMenuOn} />
      </>
    );
  }
}

export default Header;
