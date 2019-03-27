import React from "react";
import { Link } from "gatsby";
import moment from "moment";

import BigLogo from "../../components/BigLogo/BigLogo";
import UserInfo from "../UserInfo/UserInfo";
import config from "../../../data/SiteConfig";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <>
        <BigLogo config={config} size="large" />
        <div className="overall-width">
          <UserInfo config={config} />
          {postList.map(post => (
            <div>
              <Link to={post.path} key={post.title}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.excerpt}</p>
              <p>
                {moment(post.date).format("dddd, MMMM Do YYYY")} - 🕒 {post.timeToRead} minute read
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default PostListing;
