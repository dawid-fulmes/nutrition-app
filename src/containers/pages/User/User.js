import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import UserData from "./UserData/UserData";
import { getUserData } from "../../../store/actions/user";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
`;

const User = ({ isAuth, loading, userData, token, userId, onGetUserData }) => {
  useEffect(() => {
    if (isAuth) {
      onGetUserData(token, userId);
    }
  }, [isAuth, onGetUserData, token, userId]);

  return isAuth ? (
    <StyledWrapper>
      <UserData loading={loading} userData={userData} />
    </StyledWrapper>
  ) : (
    <Redirect to="/auth" />
  );
};

User.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  userData: PropTypes.object,
  token: PropTypes.string,
  userId: PropTypes.string,
  onGetUserData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.token,
  loading: state.user.loading,
  userData: state.user.userData,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  onGetUserData: (token, userId) => dispatch(getUserData(token, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
