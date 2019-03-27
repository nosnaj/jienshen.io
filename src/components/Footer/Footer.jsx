import React, { Component } from "react";
import { Link } from "gatsby";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright, userLinks } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="overall-width-bottom">
        <div className="notice-container">
          <span>{copyright}</span>
          <span>
            <Link to={url}>RSS</Link>
            {userLinks.map(userLink => (
              <>
                <span>&nbsp;|&nbsp;</span>
                <a href={userLink.url}>{userLink.label}</a>
              </>
            ))}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
