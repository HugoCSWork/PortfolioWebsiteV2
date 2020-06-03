import styled from "styled-components";

export const StyledMenu = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  display: block;
  z-index: 100;

  cursor: pointer;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
  }
  & span {
    display: block;
    float: left;
    clear: both;
    height: 4px;
    width: 40px;
    border-radius: 40px;
    background-color: #fff;
    position: absolute;
    right: 3px;
    top: 3px;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  & span:nth-child(1) {
    margin-top: 10px;
    z-index: 9;
    transform: ${({ opened }) =>
      opened ? "rotate(45deg) translateY(12px) translateX(12px)" : 0};
  }

  & span:nth-child(2) {
    margin-top: 25px;
    height: ${({ opened }) => (opened ? "400px" : "4px")};
    width: ${({ opened }) => (opened ? "400px" : "40px")};
    right: ${({ opened }) => (opened ? "-160px" : 3)};
    top: ${({ opened }) => (opened ? "-160px" : 3)};
    border-radius: ${({ opened }) => (opened ? "50%" : "40px")};
    background-color: ${({ opened }) =>
      opened ? "rgba(38, 84, 133, 0.54)" : 0};
    overflow: ${({ opened }) => (opened ? "visible" : "hidden")};
  }
  & span:nth-child(3) {
    margin-top: 40px;
    transform: ${({ opened }) =>
      opened ? " rotate(-45deg) translateY(-10px) translateX(10px)" : 0};
  }

  & ul {
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    height: 0;
    width: 0;
    right: 0;
    top: 0;
    position: absolute;
    background-color: rgba(38, 84, 133, 0.54);
    border-radius: 50%;
    z-index: 18;
    overflow: hidden;
    opacity: ${({ opened }) => (opened ? 1 : 0)};
    height: ${({ opened }) => (opened ? "400px" : 0)};
    width: ${({ opened }) => (opened ? "400px" : 0)};
  }

  & li {
    display: block;
    float: right;
    clear: both;
    height: auto;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    margin-right: ${({ opened }) => (opened ? "168px" : "-160px")};
  }
  & li:first-child {
    margin-top: 190px;
  }
  & li:nth-child(1) {
    -webkit-transition-delay: 0.05s;
  }
  & li:nth-child(2) {
    -webkit-transition-delay: 0.1s;
  }
  & li:nth-child(3) {
    -webkit-transition-delay: 0.15s;
  }
  & li:nth-child(4) {
    -webkit-transition-delay: 0.2s;
  }
  & li:nth-child(5) {
    -webkit-transition-delay: 0.25s;
  }

  & a {
    color: #fff;
    font-family: "Lato", Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    display: block;
    float: left;
    line-height: 40px;
    text-decoration: none;
  }
`;

export const Sublink = styled.a`
  color: #fff;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 100%;
  display: block;
  float: left;
  line-height: 40px;
  text-decoration: none;
`;
