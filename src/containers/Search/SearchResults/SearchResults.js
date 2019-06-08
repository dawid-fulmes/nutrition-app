import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../../../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  margin-top: 10px;
`;

const SearchResults = ({ results, loading, getDetails }) => {
  return (
    <StyledWrapper>
      {loading ? (
        <Spinner color="black" />
      ) : (
        results.map(({ name, group, id, loading, details }) => (
          <SearchResult
            key={id}
            name={name}
            group={group}
            loading={loading}
            getDetails={() => getDetails(id)}
            details={details}
          />
        ))
      )}
    </StyledWrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getDetails: PropTypes.func.isRequired,
};

export default SearchResults;
