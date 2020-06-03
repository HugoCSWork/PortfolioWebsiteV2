import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ListItem = ({ name }) => {
  const link = `#${name}`;
  return (
    <li>
      <Link smooth to={link} title={name}>
        {name}
      </Link>
    </li>
  );
};

export default ListItem;
