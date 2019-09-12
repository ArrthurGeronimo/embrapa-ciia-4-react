import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './style.css';

//import Navbar from './Components/Layout/Navbar';
//import Sidebar from "./Components/Layout/Sidebar";
//import Main from './Components/Layout/Main';
//import Footer from './Components/Layout/Footer';

import TesteUi from './TesteUi';

export default class UserLayout extends Component {
  render() {
    return (
    <div className="grid-container">

      <TesteUi />
  
    </div>
    );
  }
}
