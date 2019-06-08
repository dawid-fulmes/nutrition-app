import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Spinner from "../../../../../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  flex-grow: 1;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 100%;
  position: relative;
  flex-grow: 1;
  font-size: 1rem;
  & > h1 {
    font-size: 1rem;
  }
`;

const ResultDetails = ({ loading, group, details }) => {
  return (
    <StyledWrapper>
      {loading ? (
        <Spinner color="black" />
      ) : (
        <Details>
          <h1>{group}</h1>
          <p>per 100g:</p>
          <ul>
            {Object.keys(details).map(label => (
              <li key={details[label].name}>
                {details[label].name} : {details[label].value}{" "}
                {details[label].unit}
              </li>
            ))}
          </ul>
        </Details>
      )}
    </StyledWrapper>
  );
};

ResultDetails.propTypes = {
  group: PropTypes.string,
  loading: PropTypes.bool,
  details: PropTypes.object,
};

export default ResultDetails;
