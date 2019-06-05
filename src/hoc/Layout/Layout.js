import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../../assets/styles/GlobalStyle/GlobalStyle";
import { theme } from "../../assets/styles/theme/theme";
import Header from "../../components/Header/Header";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledWrapper>
            <Header />
            <StyledMain>{children}</StyledMain>
          </StyledWrapper>
        </>
      </ThemeProvider>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
