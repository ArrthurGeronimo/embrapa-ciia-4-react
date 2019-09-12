import React from "react";

import './style.css';

class Sidebar extends React.Component {
  render() {
    return (
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
    );
  }
}


export default Sidebar;
