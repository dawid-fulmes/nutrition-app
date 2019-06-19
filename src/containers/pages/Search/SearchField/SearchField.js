import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;

  & > button {
    border-radius: 0 20px 20px 0;
  }

  & > input {
    border-radius: 20px 0 0 20px;
    border-right: none;
  }
`;

const SearchField = ({ searchValue, searchChange, search }) => {
  const searchClick = () => {
    if (searchValue.trim().length < 1) return;
    search();
  };
  return (
    <StyledWrapper>
      <Input
        value={searchValue}
        type="text"
        change={searchChange}
        placeholder="food..."
      />
      <Button click={searchClick}>
        <i className="fas fa-search" />
      </Button>
    </StyledWrapper>
  );
};

SearchField.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchField;
