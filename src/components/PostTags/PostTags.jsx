import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

import styles from './PostTags.module.css';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className={styles.container}>
        {tags &&
          tags.map(tag => (
            <Link className={styles.tag} key={tag} style={{ textDecoration: "none" }} to={`/tags/${_.kebabCase(tag)}`}>

              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
