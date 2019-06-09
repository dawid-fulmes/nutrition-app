import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  font-size: 2.2rem;
  text-decoration: none;
  padding: 5px 10px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.5s;

  :hover,
  :active {
    transform: scale(1.1) rotateZ(-1deg);
  }
`;

const Logo = () => {
  return <StyledLink to="/">Nutrition App</StyledLink>;
};

export default Logo;
