import React from "react";
import styled from "styled-components";

const barsDimensions = {
  height: 5,
  width: 30,
};

const StyledHamburger = styled.button`
  background: none;
  border: none;
  padding: ${2 * barsDimensions.height + 10 + "px"} 10px;
`;

const HamburgerBars = styled.div`
  width: ${() => barsDimensions.width + "px"};
  height: ${() => barsDimensions.height + "px"};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1px;
  position: relative;

  ::after,
  ::before {
    display: block;
    content: "";
    width: ${() => barsDimensions.width + "px"};
    height: ${() => barsDimensions.height + "px"};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
    position: absolute;
  }

  ::after {
    top: ${() => -2 * barsDimensions.height + "px"};
  }

  ::before {
    top: ${() => 2 * barsDimensions.height + "px"};
  }
`;

const Hamburger = () => {
  return (
    <StyledHamburger>
      <HamburgerBars />
    </StyledHamburger>
  );
};

export default Hamburger;
