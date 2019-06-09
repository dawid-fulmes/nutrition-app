import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../../../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  margin-top: 10px;
  & > p {
    margin-top: 40px;
    text-align: center;
  }
`;

const SearchResults = ({ results, loading, getDetails, lastQuery }) => {
  let searchResults = results.map(({ name, group, id, loading, details }) => (
    <SearchResult
      key={id}
      name={name}
      group={group}
      loading={loading}
      getDetails={() => getDetails(id)}
      details={details}
    />
  ));

  if (lastQuery.length && results.length < 1) {
    const message = `There is no "${lastQuery}" in data base :(`;
    searchResults = <p>{message}</p>;
  }

  return (
    <StyledWrapper>
      {loading ? <Spinner color="black" /> : searchResults}
    </StyledWrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getDetails: PropTypes.func.isRequired,
  lastQuery: PropTypes.string.isRequired,
};

export default SearchResults;
