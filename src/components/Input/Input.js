import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  font-size: 2rem;
  line-height: 1.5;
  padding: 0 10px;
  border: 3px solid ${({ theme }) => theme.colors.main};
  width: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 20px;
`;

const Input = ({ value, change, type, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={change}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
