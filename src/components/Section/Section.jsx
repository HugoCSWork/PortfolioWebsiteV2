import React from "react";

const Section = ({ classVar, heading, subHeading, children }) => {
  return (
    <section className={classVar} id={heading}>
      <div className="container">
        <div className="section-heading">
          <h1>{heading}</h1>
          <h6> {subHeading} </h6>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
