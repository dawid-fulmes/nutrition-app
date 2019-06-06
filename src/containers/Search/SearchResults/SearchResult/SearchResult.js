import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 5px;
`;
const SearchResult = ({ name }) => {
  return <StyledWrapper>{name}</StyledWrapper>;
};

SearchResult.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
};

export default SearchResult;
