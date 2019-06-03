import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
`;

const MobileMenu = ({ visible }) => {
  return <StyledMobileMenu visible={visible}>NavigationItems</StyledMobileMenu>;
};

MobileMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default MobileMenu;
