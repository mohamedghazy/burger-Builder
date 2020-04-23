import React from "react";
import Logo from "./../../logo/Logo";
import NavigationItems from "./../NavgationItems/NavigationItems";
import Classes from "./SideDrawer.css";
import BackDrob from "./../../UI/Backdrop/BackDrop";
import Aux from "./../../../HOC/Auxhoc";
const sideDrawer = (props) => {
  let attachedClasses = [Classes.SideDrawer, Classes.Close];
  if (props.open) {
    attachedClasses = [Classes.SideDrawer, Classes.Open];
  }
  return (
    <Aux>
      <BackDrob show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
