import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchField from "./SearchField/SearchField";
import { search, getDetails } from "../../../store/actions/search";
import SearchResults from "./SearchResults/SearchResults";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

const Search = ({
  onSearch,
  onGetDetails,
  searchResults,
  loadingResults,
  lastQuery,
}) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <StyledWrapper>
      <SearchField
        search={() => onSearch(searchInputValue)}
        searchValue={searchInputValue}
        searchChange={e => setSearchInputValue(e.target.value)}
      />
      <SearchResults
        lastQuery={lastQuery}
        results={searchResults}
        loading={loadingResults}
        getDetails={onGetDetails}
      />
    </StyledWrapper>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  loadingResults: PropTypes.bool.isRequired,
  onGetDetails: PropTypes.func.isRequired,
  lastQuery: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.search.results,
  loadingResults: state.search.loading,
  lastQuery: state.search.lastQuery,
});

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(search(query)),
  onGetDetails: id => dispatch(getDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
