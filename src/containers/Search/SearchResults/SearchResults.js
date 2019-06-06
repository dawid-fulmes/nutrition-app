import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../../../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  margin-top: 10px;
`;

const SearchResults = ({ results, loading }) => {
  return (
    <StyledWrapper>
      {loading ? (
        <Spinner color="black" />
      ) : (
        results.map(({ name, group, id }) => (
          <SearchResult key={id} name={name} group={group} />
        ))
      )}
    </StyledWrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchResults;
