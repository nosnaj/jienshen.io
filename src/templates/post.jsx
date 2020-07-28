import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import BigLogo from "../components/BigLogo/BigLogo";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <BigLogo config={config} />
        <div style={{ width: "100%", height: "400px", background: `url(${post.cover})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="overall-width">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1 className="title">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <a href={`https://mobile.twitter.com/search?q=${encodeURIComponent(`https://jienshen.io${slug}`)}`} target="_blank" rel="noopener noreferrer">
                  Discuss on Twitter
                </a>
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
            <hr />
            <UserInfo config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
