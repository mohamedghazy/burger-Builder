import React, { Component } from "react";
import Aux from "./../../HOC/Aux";
import classes from "./Layout.css";
import Toolbar from "./../navigations/Toolbar/Toolbar";
import SideDrawer from "./../navigations/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggle={this.drawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
