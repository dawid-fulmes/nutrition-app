import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Layout from "../../hoc/Layout/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Error404 from "../pages/Error404/Error404";
import About from "../pages/About/About";
import Auth from "../pages/Auth/Auth";
import Logout from "../pages/Logout/Logout";
import { authCheckLocalStorage } from "../../store/actions/auth";
import User from "../pages/User/User";

const App = ({ onTryToAuth }) => {
  useEffect(() => {
    onTryToAuth();
  });
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/user" component={User} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  );
};

App.propTypes = {
  onTryToAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onTryToAuth: () => dispatch(authCheckLocalStorage()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
