const config = {
  siteTitle: "jienshen.io", // Site title.
  siteTitleShort: "jienshen.io", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Janson Jien Shen Chah", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://jienshen.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Personal blog by Jien Shen.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-34259155-2", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Janson Chah", // Username to display in the author segment.
  userEmail: "nosnaj@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "nosnaj", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Klang Valley, Malaysia", // User location to display in the author segment.
  userAvatar: "https://secure.gravatar.com/avatar/05c4551cb901a0c87c20d9ccb6ee22bc.jpg", // User avatar to display in the author segment.
  userDescription:
    "I write about personal stories, tech stuff, leadership and life in general. Expect pointless ramblings, random thoughts. Minimum 1 post per week. (Edit: LIAR) Quality not guaranteed.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/nosnaj",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/nosnaj",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:nosnaj@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright © 2019-${new Date().getFullYear()}. Jien Shen`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/") config.siteRss = `/${config.siteRss}`;

module.exports = config;
