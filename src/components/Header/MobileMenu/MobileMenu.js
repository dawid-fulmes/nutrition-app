import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavItems from "../NavItems/NavItems";

const StyledMobileMenu = styled.div`
  position: fixed;
  padding-top: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.main};
  transition: transform 0.8s;
  transform: translateX(${({ visible }) => (visible ? 0 : "-100%")});

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

const MobileMenu = ({ visible, closeMenu, isAuth }) => {
  return (
    <StyledMobileMenu visible={visible}>
      <NavItems isAuth={isAuth} closeMenu={closeMenu} />
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func,
  isAuth: PropTypes.bool.isRequired,
};

export default MobileMenu;
