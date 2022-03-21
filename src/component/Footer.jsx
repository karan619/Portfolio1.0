import React from "react";
import "../css/Footer.css";
import myPicture from "../images/myPicture.jpg";

const Footer = () => {
  return (
    <>
      <section className="footer__wrapper">
        <div className="footer__innerwrapper">
          <div className="footer__headingwrapper">
            <h1 className="footer__heading">Reach Out to me!</h1>
            <h6 className="footer__subheading">
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </h6>
            <p className="footer__para">I'm a Front-end Developer </p>
            <div className="footer__iconwrapper">
              <a
                href="https://www.linkedin.com/in/karan-chauhan-910423b5/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin footer__innericon service__linkedin"></i>
              </a>

              <a
                href="https://github.com/karan619"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-github footer__innericon service__git"></i>
              </a>
            </div>
          </div>
          <div className="footer__imagewrapper">
            <img
              className="footer__image"
              src={myPicture}
              alt="Coming Soon"
              srcset=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
