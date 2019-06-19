import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ResultDetails from "./ResultDetails/ResultDetails";
import { isEmpty } from "../../../../shared/utils";
import Button from "../../../../components/Button/Button";

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
    font-size: 1.5rem;
    flex-shrink: 0;
    border-radius: 50%;
    & i {
      transition: transform 0.2s;
      transform: rotate(${({ detailed }) => (detailed ? "180deg" : "0deg")});
    }
  }
`;

const SearchResult = ({ name, group, loading, getDetails, details }) => {
  const [detailed, toggleDetailed] = useState(false);

  const click = () => {
    if (isEmpty(details)) {
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
        <Button click={click}>
          <i className="fas fa-caret-down" />
        </Button>
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
