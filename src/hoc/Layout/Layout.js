import React, { Component } from "react";
import PropTypes from "prop-types";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
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
