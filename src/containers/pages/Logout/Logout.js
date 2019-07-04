import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { authLogout } from "../../../store/actions/auth";
import Button from "../../../components/Button/Button";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  text-align: center;
  margin: auto;
  padding: 20px;
  & > button {
    margin: 10px;
  }
`;

const Logout = ({ isAuth, onLogout, history }) => {
  return isAuth ? (
    <StyledWrapper>
      <h1>Are You sure?</h1>
      <Button click={onLogout}>Yes</Button>
      <Button click={history.goBack}>No</Button>
    </StyledWrapper>
  ) : (
    <Redirect to="/" />
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
