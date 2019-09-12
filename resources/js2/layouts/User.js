import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "../components/User/Navbars/UserNavbar";
import UserFooter from "../components/User/Footers/UserFooter";
import UserSidebar from "../components/User/Sidebar/UserSidebar";

import routes from "../routes.js";

class User extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  render() {
    return (
      <>
        <UserSidebar
          
        />
      </>
    );
  }
}

export default User;
