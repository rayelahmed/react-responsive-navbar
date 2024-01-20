import React, { useState } from "react";
import logo from "../../img/logoIpsum-298.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isBarsVisible, setIsBarsVisible] = useState(true);

  const toggleButtons = () => {
    setIsBarsVisible(!isBarsVisible);
  };
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <ul className={isBarsVisible ? "ul " : "ul show"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div className="fa-icons">
          <li style={{ display: isBarsVisible ? "flex" : "none" }}>
            <FontAwesomeIcon icon={faBars} onClick={toggleButtons} />
          </li>
          <li style={{ display: !isBarsVisible ? "flex" : "none" }}>
            <FontAwesomeIcon icon={faTimes} onClick={toggleButtons} />
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
