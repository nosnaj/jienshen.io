import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./BigLogo.module.css";

export default class BigLogo extends Component {
  render() {
    const {
      config: { siteLogo },
      size
    } = this.props;
    return (
      <div className="overall-width-top">
        <Link to="/">
          {size !== "large" ? (
            <div className={styles.logo}>
              <img src={siteLogo} alt="logo" className={styles.large} />
            </div>
          ) : (
            <img src={siteLogo} alt="logo" className={styles.small} />
          )}
        </Link>
      </div>
    );
  }
}
