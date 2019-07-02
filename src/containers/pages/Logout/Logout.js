import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authLogout } from "../../../store/actions/auth";

const Logout = ({ onLogout }) => {
  useEffect(() => {
    onLogout();
  });

  return <Redirect to="/" />;
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authLogout()),
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
