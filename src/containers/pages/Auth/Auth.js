import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { auth } from "../../../store/actions/auth";
import Spinner from "../../../components/Spinner/Spinner";
import ErrorBox from "../../../components/ErrorBox/ErrorBox";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  align-items: center;

  & > input {
    margin-bottom: 20px;
    min-width: 100%;
  }
  & > button:nth-of-type(2) {
    margin-top: 20px;
    font-size: 1.5rem;
  }
`;
const Auth = ({ loading, onAuth, error, isAuth }) => {
  const [signupMode, setSignupMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authClickHandler = () => {
    if (email.trim().length && password.trim().length) {
      onAuth(signupMode, email, password);
    }
  };

  const authForm = (
    <>
      <Input
        type="text"
        value={email}
        change={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        change={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button click={authClickHandler}>
        {signupMode ? "Sign up" : "Sign in"}
      </Button>
    </>
  );

  let errorBox;
  if (error) {
    errorBox = <ErrorBox>{error.message}</ErrorBox>;
  }

  return isAuth ? (
    <Redirect to="/user" />
  ) : (
    <StyledWrapper>
      {loading ? <Spinner color="white" /> : authForm}
      <Button click={() => setSignupMode(!signupMode)}>
        Switch to {signupMode ? "sign in" : "sign up"}
      </Button>
      {errorBox}
    </StyledWrapper>
  );
};

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
  error: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuth: !!state.auth.token,
});
const mapDispatchToProps = dispatch => ({
  onAuth: (isSignup, email, password) =>
    dispatch(auth(isSignup, email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
