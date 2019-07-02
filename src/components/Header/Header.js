import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";

import Hamburger from "./Hamburger/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavItems from "./NavItems/NavItems";
import Logo from "./Logo/Logo";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999;
`;

const Header = ({ isAuth }) => {
  const [mobileMenuOn, setMobilemenuOn] = useState(false);

  const toggleMobileMenuHandler = () => setMobilemenuOn(!mobileMenuOn);
  const closeMobileMenuHandler = () => setMobilemenuOn(false);

  return (
    <>
      <StyledHeader>
        <Hamburger
          mobileMenuOn={mobileMenuOn}
          toggleMobileMenu={toggleMobileMenuHandler}
        />
        <Logo closeMenu={closeMobileMenuHandler} />
        <NavItems isDesktop isAuth={isAuth} />
      </StyledHeader>
      <MobileMenu
        isAuth={isAuth}
        visible={mobileMenuOn}
        closeMenu={closeMobileMenuHandler}
      />
    </>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default Header;
