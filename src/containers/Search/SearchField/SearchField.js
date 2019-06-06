import React, { Component } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;

  & input,
  & button {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 10px;
    border: 3px solid ${({ theme }) => theme.colors.main};
  }

  & input {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
    border-right: none;
    border-radius: 20px 0 0 20px;
  }

  & button {
    border-radius: 0 20px 20px 0;
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
  }
`;

class SearchField extends Component {
  state = {
    value: "",
  };
  changeHandler = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { value } = this.state;
    const { changeHandler } = this;
    return (
      <StyledWrapper>
        <input value={value} type="text" onChange={changeHandler} />
        <button>
          <i className="fas fa-search" />
        </button>
      </StyledWrapper>
    );
  }
}

export default SearchField;
