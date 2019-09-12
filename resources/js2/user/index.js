import React from "react";
import { Route, Switch } from "react-router-dom";

// Style
import "./style.css";
// core components
//import Sidebar from "./Components/Layout/Sidebar";
//import UserFooter from "../components/User/Footers/UserFooter";
//import UserSidebar from "../components/User/Sidebar/UserSidebar";

//import routes from "../routes.js";

class User extends React.Component {
  render() {
    return (
      <>
    <div className="grid-container">
      <div className="menu-icon">
      <i className="fas fa-bars header__menu"></i>
    </div>
   
    <header className="header">
      <div className="header__search">Search...</div>
      <div className="header__avatar">Your face</div>
    </header>

    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">Item One</li>
        <li className="sidenav__list-item">Item Two</li>
        <li className="sidenav__list-item">Item Three</li>
        <li className="sidenav__list-item">Item Four</li>
        <li className="sidenav__list-item">Item Five</li>
      </ul>
    </aside>

    <main className="main">
    </main>

    <footer className="footer">
      <div className="footer__copyright">&copy; 2018 MTH</div>
      <div className="footer__signature">Made with love by pure genius</div>
    </footer>
    
    </div>
    </>
    );
  }
}

export default User;
