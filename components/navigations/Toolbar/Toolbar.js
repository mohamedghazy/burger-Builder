import React from "react";
import classes from "./Toolbar.css";
import Logo from "./../../logo/Logo";
import NavigationItems from "./../NavgationItems/NavigationItems";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggle} />
    <Logo height="90%" />
    <nav className={classes.DeskTopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
