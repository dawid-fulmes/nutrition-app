import React, { Component } from "react";
import styled from "styled-components";

import SearchField from "./SearchField/SearchField";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

class Search extends Component {
  render() {
    return (
      <StyledWrapper>
        <SearchField />
      </StyledWrapper>
    );
  }
}

export default Search;
