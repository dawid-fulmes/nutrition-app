import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  font-size: 2rem;
  line-height: 1.5;
  padding: 0 10px;
  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background},
    #7ce64c
  );
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background: linear-gradient(135deg, transparent, #35bf19);
    transition: opacity 0.3s;
  }

  &:hover::after,
  &:active::after {
    opacity: 1;
  }
`;

const Label = styled.div`
  position: relative;
  z-index: 2;
`;

const Button = ({ children, click }) => {
  return (
    <StyledButton onClick={click}>
      <Label>{children}</Label>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
