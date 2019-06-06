import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult/SearchResult";

const StyledWrapper = styled.div``;

const SearchResults = ({ results }) => {
  return (
    <StyledWrapper>
      {results.map(({ name, group, id }) => (
        <SearchResult key={id} name={name} group={group} />
      ))}
    </StyledWrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
