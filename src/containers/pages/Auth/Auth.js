import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 4rem;
  text-align: center;
  margin: auto;
  padding: 20px;
`;

const Auth = () => {
  return <StyledWrapper>Login</StyledWrapper>;
};

export default Auth;
