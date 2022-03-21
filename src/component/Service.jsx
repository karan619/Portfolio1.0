import React, { useEffect, useRef } from "react";
import "../css/Service.css";
import { Fade } from "react-reveal";
import lottie from "lottie-web";

const Service = () => {
  const conatiner = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: conatiner.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/webdev.json"),
    });
  }, []);

  return (
    <>
      <section id="service" className="service__wrapper">
        <h1 className="service__mainheading">WHAT I DO</h1>
        <span className="service__divider"></span>

        <div className="service__subwrapper">
          <div
            className="service__lottie service__lottiestyle"
            ref={conatiner}
          ></div>

          <section className="service__skillswrapper">
            <div className="service__iconwrapper">
              <div className="service__icon">
                <i class="fab fa-html5 service__innericon service__html"></i>
              </div>
              <div className="service__icon">
                <i class="fab fa-css3-alt service__innericon service__css"></i>
              </div>
              <div className="service__icon">
                <i class="fab fa-js-square service__innericon service__js"></i>
              </div>
              <div className="service__icon">
                <i class="fab fa-react service__innericon service__react"></i>
              </div>
              <div className="service__icon">
                <i class="fab fa-node-js service__innericon service__node"></i>
              </div>
              <div className="service__icon">
                <i class="fas fa-database service__innericon service__sql"></i>
              </div>
              <div className="service__icon">
                <i class="fab fa-github service__innericon service__github"></i>
              </div>
            </div>
            <div>
              <p className="service__para">
                ⚡I have a passion for developing pixel-perfect websites and
                apps while maintaining a readable, modular, and reusable
                code-base.
              </p>

              <p className="service__para">
                ⚡ I strive to develop and implement responsive and
                aesthetically pleasing interfaces for websites and apps that
                adapt to any type of device, platform, or browser.
              </p>

              <p className="service__para">
                ⚡ I believe user experience is an important aspect of software
                or website designing, to make a product successful.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Service;
