import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: auto;
`;

const About = () => {
  return (
    <StyledWrapper>
      <h1>About Project</h1>
      <p>It is demo version of the nutrition app.</p>
      <p>
        Check a repo{" "}
        <a href="https://github.com/dawid-fulmes/nutrition-app">here</a>
      </p>
    </StyledWrapper>
  );
};

export default About;
