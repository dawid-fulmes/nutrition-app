import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../assets/styles/GlobalStyle/GlobalStyle";
import { theme } from "../../assets/styles/theme/theme";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <p>Navigation Bar</p>
          <main>{children}</main>
        </>
      </ThemeProvider>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
