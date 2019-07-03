import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

const Search = () => {
  return <StyledWrapper>User page</StyledWrapper>;
};

export default Search;
