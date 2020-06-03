import React, { useState, useEffect, useRef } from "react";
import ListItem from "./ListItem";
import { StyledMenu } from "./Navbar.styled";

const Navbar = () => {
  const [isOpened, setisOpened] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }

    setisOpened(false);
  };
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node}>
      <StyledMenu
        className="open"
        opened={isOpened}
        onClick={() => setisOpened(!isOpened)}
      >
        <span className="cls"></span>
        <span>
          <ul className="sub-menu">
            <ListItem name="about" />
            <ListItem name="experience" />
            <ListItem name="portfolio" />
            <ListItem name="contact" />
          </ul>
        </span>
        <span className="cls"></span>
      </StyledMenu>
    </div>
  );
};

export default Navbar;
