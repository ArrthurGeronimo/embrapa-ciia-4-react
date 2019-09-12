import React from "react";

import './style.css';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>
   
        <header className="header">
          <div className="header__search">Search...</div>
          <div className="header__avatar">Your face</div>
        </header>
      </>
    );
  }
}

export default Navbar;
