import React, { Component } from 'react';
import './Footer.scss';
import yit from '../static/img/mobile/yit-footer.png';

class Footer extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <footer className="footer">
        <a rel="noopener noreferrer" href="https://www.yit.co.il/" target="_blank">
          <img alt="yit"  src={yit} />
        </a>
      </footer>
    );
  }
}

export default Footer;