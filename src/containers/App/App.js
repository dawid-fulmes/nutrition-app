import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Home from "../../components/Home/Home";
import Search from "../Search/Search";
import Error404 from "../Error404/Error404";
import About from "../About/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  );
}

export default App;
