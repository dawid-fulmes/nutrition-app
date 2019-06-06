import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Home from "../../components/Home/Home";
import Search from "../Search/Search";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </Layout>
  );
}

export default App;
