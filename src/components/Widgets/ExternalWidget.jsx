import React from "react";

const ExternalWidget = ({ link }) => {
  return (
    <a
      style={{ padding: "0.8rem" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-external-link-alt"></i>{" "}
    </a>
  );
};

export default ExternalWidget;
