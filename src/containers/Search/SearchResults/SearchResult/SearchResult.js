import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ResultDetails from "./ResultDetails/ResultDetails";

const StyledWrapper = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;

  & > div {
    flex-grow: 1;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
  }

  & button {
    display: block;
    font-size: 1.5rem;
    line-height: 40px;
    flex-shrink: 0;
    width: 40px;
    border: 3px solid ${({ theme }) => theme.colors.main};
    border-radius: 10px;
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
    & i {
      transition: transform 0.2s;
      transform: rotate(${({ detailed }) => (detailed ? "180deg" : "0deg")});
    }
  }
`;

const SearchResult = ({ name, group, loading, getDetails, details }) => {
  const [detailed, toggleDetailed] = useState(false);

  const click = () => {
    if (
      Object.entries(details).length === 0 &&
      details.constructor === Object
    ) {
      getDetails();
    }
    toggleDetailed(!detailed);
  };

  return (
    <>
      <StyledWrapper detailed={detailed}>
        <div>
          <p>{name}</p>
          {detailed && (
            <ResultDetails loading={loading} group={group} details={details} />
          )}
        </div>
        <button onClick={click}>
          <i className="fas fa-caret-down" />
        </button>
      </StyledWrapper>
    </>
  );
};

SearchResult.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  loading: PropTypes.bool,
  getDetails: PropTypes.func,
  details: PropTypes.object,
};

export default SearchResult;
