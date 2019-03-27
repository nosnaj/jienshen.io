import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";
import styles from "./UserInfo.module.css";
class UserInfo extends Component {
  render() {
    const {
      config: { userName, userTwitter, userAvatar, userDescription, userLinks }
    } = this.props;
    const { expanded } = this.props;
    return (
      <>
        <div className={styles.userInfo}>
          <img src={userAvatar} alt="User avatar." className={styles.avatar} />
          <div className={styles.content}>
            <div>
              <div>{userName}</div>
              <Follow username={userTwitter} options={{ count: expanded ? true : "none" }} />
            </div>
            <div>{userDescription}</div>
          </div>
        </div>
      </>
    );
  }
}

export default UserInfo;
