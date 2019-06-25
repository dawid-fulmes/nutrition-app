import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

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
const Auth = () => {
  const [signupMode, setSignupMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledWrapper>
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
      <Button>{signupMode ? "Sign up" : "Sign in"}</Button>
      <Button click={() => setSignupMode(!signupMode)}>
        Switch to {signupMode ? "sign in" : "sign up"}
      </Button>
    </StyledWrapper>
  );
};

export default Auth;
