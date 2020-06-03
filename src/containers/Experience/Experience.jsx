import React from "react";
import data from "../../data/experience.json";
import "./Experience.css";
import Section from "../../components/Section/Section";
const Experience = () => {
  return (
    <Section heading="experience" subHeading="Previous Jobs">
      <div className="timeline">
        <ul>
          {data.map((data, i) => {
            return (
              <li className="date" data-date="2019 - Present" key={i}>
                <h1>
                  {data.name} - {data.role}
                </h1>
                <p className="centered-text">{data.information}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
