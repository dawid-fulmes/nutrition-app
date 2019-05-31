import React, { Component } from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../../assets/styles/GlobalStyle/GlobalStyle";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalStyle />
        <p>Navigation Bar</p>
        <main>{children}</main>
      </>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
