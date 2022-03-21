import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const closeHamburgerMenu = () => {
    setShowMediaIcons(false);
  };

  return (
    <>
      <nav className="navigation__main-nav">
        {/* 1st logo part  */}
        <div className="navigation__logo">
          <h2 className="navigation__logo-heading">Karan Chauhan</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons
              ? "navigation__menu-link navigation__mobile-menu-link"
              : "navigation__menu-link"
          }
        >
          <ul>
            <li>
              <a href="#mainpage" onClick={closeHamburgerMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#service" onClick={closeHamburgerMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeHamburgerMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#project" onClick={closeHamburgerMenu}>
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="navigation__social-media">
          <ul className="navigation__social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/karan-chauhan-910423b5/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin navigation__innericon service__linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karan619"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-github navigation__innericon service__git"></i>
              </a>
            </li>
          </ul>
          {/* hamburget menu start  */}
          <div className="navigation__hamburger-menu">
            <GiHamburgerMenu
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
