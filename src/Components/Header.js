import React, { Component } from 'react';
import { push } from "./services/Analytics"
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super();
  }

  shareBTN(action) {
    var url = "https://z.ynet.co.il/short/commerce/2018/Reebok/";
    switch (action) {
      default:
      case "facebook":
        push("Share_Facebook", url);
        break;
        case "instagram":
        push("Share_Instagram", url);
        break;
      case "negishut":
        push("Accessibility", "Open_Accessibility_Clicked");
        window.document.getElementById('INDmenu-btn').click();
        break;
    }
  }


  render() {
    return (
      <header className="header">
        <div className="header-logo"></div>
        <div className="header-share">
          <a className="header-share-instagram btn" rel="noopener noreferrer" href="https://www.instagram.com/reebok/" target="_blank" onClick={() => this.shareBTN("instagram")}>go to instagram page</a>
          <a className="header-share-facebook btn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ReebokIsrael/" onClick={() => this.shareBTN("facebook")}>go to facebook page</a>
          <button type="button" className="header-share-negishut btn" onClick={() => this.shareBTN("negishut")}></button>
        </div>
      </header>
    );
  }

}

export default Header;




