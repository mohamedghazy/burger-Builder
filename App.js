import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BurgerBuildr from "./containers/BurderBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from "../src/containers/Orders/Orders";
import Authan from "./containers/Auth/Auth";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/orders" component={Orders} />
          <Route path="/authan" component={Authan} />
          <Route path="/" exact component={BurgerBuildr} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
