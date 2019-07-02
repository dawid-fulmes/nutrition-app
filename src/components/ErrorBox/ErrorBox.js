import styled from "styled-components";

const ErrorBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  padding: 10px;
  margin: 16px;
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ::after,
  ::before {
    content: "!";
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 2rem;
    line-height: 1;
    padding: 0 5px;
    align-items: center;
  }
  ::after {
    left: 100%;
  }
  ::before {
    right: 100%;
  }
`;

export default ErrorBox;
