import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;

  & input,
  & button {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 10px;
    border: 3px solid ${({ theme }) => theme.colors.main};
  }

  & input {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
    border-right: none;
    border-radius: 20px 0 0 20px;
  }

  & button {
    border-radius: 0 20px 20px 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background},
      #7ce64c
    );
    &:hover,
    &:active {
      background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.background},
        #35bf19
      );
    }
  }
`;

const SearchField = ({ searchValue, searchChange, search }) => {
  const searchClick = () => {
    if (searchValue.trim().length < 1) return;
    search();
  };
  return (
    <StyledWrapper>
      <input
        value={searchValue}
        type="text"
        onChange={searchChange}
        placeholder="food..."
      />
      <button onClick={searchClick}>
        <i className="fas fa-search" />
      </button>
    </StyledWrapper>
  );
};

SearchField.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchField;
