import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchField from "./SearchField/SearchField";
import { search, getDetails } from "../../store/actions/search";
import SearchResults from "./SearchResults/SearchResults";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

class Search extends Component {
  state = {
    searchInputvalue: "",
  };
  changeSearchInputHandler = e => {
    this.setState({ searchInputvalue: e.target.value });
  };
  render() {
    const {
      onSearch,
      onGetDetails,
      searchResults,
      loadingResults,
      lastQuery,
    } = this.props;
    const { searchInputvalue } = this.state;
    const { changeSearchInputHandler } = this;
    return (
      <StyledWrapper>
        <SearchField
          search={() => onSearch(searchInputvalue)}
          searchValue={searchInputvalue}
          searchChange={changeSearchInputHandler}
        />
        <SearchResults
          lastQuery={lastQuery}
          results={searchResults}
          loading={loadingResults}
          getDetails={onGetDetails}
        />
      </StyledWrapper>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  loadingResults: PropTypes.bool.isRequired,
  onGetDetails: PropTypes.func.isRequired,
  lastQuery: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.results,
  loadingResults: state.loading,
  lastQuery: state.lastQuery,
});

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(search(query)),
  onGetDetails: id => dispatch(getDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
