import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: auto;
`;

const Error404 = () => {
  return (
    <StyledWrapper>
      <h1>404</h1>
      <p>Something went wrong</p>
    </StyledWrapper>
  );
};

export default Error404;
