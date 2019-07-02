import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import GlobalStyle from "../../assets/styles/GlobalStyle/GlobalStyle";
import { theme } from "../../assets/styles/theme/theme";
import Header from "../../components/Header/Header";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Layout = ({ children, isAuth }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          <Header isAuth={isAuth} />
          <StyledMain>{children}</StyledMain>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.token,
});

export default connect(mapStateToProps)(Layout);
