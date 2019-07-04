import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Spinner from "../../../../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

const UserData = ({ loading, userData }) => {
  let content;
  if (userData != null) {
    content = (
      <div>
        <p>{`Name: ${userData.name}`}</p>
        <p>{`Height: ${userData.height} cm`}</p>
        <p>{`Weight: ${userData.weight} kg`}</p>
      </div>
    );
  }
  return (
    <StyledWrapper>
      {loading ? <Spinner color="black" /> : content}
    </StyledWrapper>
  );
};

UserData.propTypes = {
  userData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default UserData;
