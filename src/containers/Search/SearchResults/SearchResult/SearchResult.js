import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div``;
const SearchResult = ({ name, group }) => {
  return (
    <StyledWrapper>
      {group} : {name}
    </StyledWrapper>
  );
};

SearchResult.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
};

export default SearchResult;
