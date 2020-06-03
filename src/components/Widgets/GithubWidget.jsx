import React from "react";

const GithubWidget = ({ link = "https://www.github.com/hugocswork" }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github-square github fa-fw"></i>
    </a>
  );
};

export default GithubWidget;
