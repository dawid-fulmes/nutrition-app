import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Error404 from "../pages/Error404/Error404";
import About from "../pages/About/About";
import Auth from "../pages/Auth/Auth";
import Logout from "../pages/Logout/Logout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  );
};

export default App;
