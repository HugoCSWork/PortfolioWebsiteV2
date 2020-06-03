import React from "react";
import "./LandingPage.css";
import GithubWidget from "../../components/Widgets/GithubWidget";
import LinkedInWidget from "../../components/Widgets/LinkedInWidget";
import WidgetGroup from "../../components/Widgets/WidgetGroup";
const LandingPage = () => (
  <header>
    <div className="landing-description">
      <h1>Hugo Tomas</h1>
      <h6>Software Engineer</h6>
      <WidgetGroup className="icon-container">
        <LinkedInWidget />
        <GithubWidget />
      </WidgetGroup>
    </div>
  </header>
);

export default LandingPage;
