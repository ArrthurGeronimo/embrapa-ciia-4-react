import React from "react";

import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">&copy; 2019</div>
        <div className="footer__signature">Made with love by Artha</div>
      </footer>
    );
  }
}


export default Footer;
