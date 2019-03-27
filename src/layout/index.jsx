import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import favicon16 from "../../static/logos/logo-16.png";
import favicon32 from "../../static/logos/logo-32.png";
import favicon64 from "../../static/logos/logo-64.png";
import Footer from "../components/Footer/Footer";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon32} />
          <link rel="shortcut icon" type="image/png" href={favicon64} />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
        </Helmet>
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
