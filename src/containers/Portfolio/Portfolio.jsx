import React from "react";
import "./Portfolio.css";
import data from "../../data/portfolio.json";
import Section from "../../components/Section/Section";
import GithubWidget from "../../components/Widgets/GithubWidget";
import WidgetGroup from "../../components/Widgets/WidgetGroup";
import ExternalWidget from "../../components/Widgets/ExternalWidget";

const Portfolio = () => {
  return (
    <Section heading="portfolio" subHeading="Recent Work">
      <div className="item-box">
        {data.map((data, i) => {
          const classLeft = i % 2 !== 0 ? "-left" : "";
          const animationLeft = i % 2 !== 0 ? "-left" : "-right";
          const animationRight = i % 2 !== 0 ? "-right" : "-left";
          return (
            <div className="item" key={i}>
              <div
                className={"item-text" + classLeft}
                data-aos={"fade" + animationRight}
                data-aos-delay="600"
              >
                <h1 className={"item-title" + classLeft}>{data.name}</h1>
                <div className="item-description">
                  <p>{data.description}</p>
                  <ul>
                    {data.technologies.map((tech, u) => {
                      return <li key={u}> {tech} </li>;
                    })}
                  </ul>
                </div>
                <div className={"icons" + classLeft}>
                  <WidgetGroup className="portfolio-icon-container">
                    <GithubWidget link={data.link} />
                    <ExternalWidget link={data.link} />
                  </WidgetGroup>
                </div>
              </div>
              <div
                className={"item-image" + classLeft}
                data-aos={"fade" + animationLeft}
                data-aos-delay="300"
              >
                <img src={require("../../images/" + data.image)} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Portfolio;
