import React, { useEffect, useRef } from "react";
import Typed from "react-typed";
import lottie from "lottie-web";
import "../css/MainPage.css";
import Navigation from "./Navigation";
import BubbleParticles from "./BubbleParticles";

const Mainpage = () => {
  const conatiner = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: conatiner.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/coding.json"),
    });
  }, []);
  return (
    <>
      <section id="mainpage" className="mainpage__wrapper">
        <BubbleParticles />
        <Navigation />

        <section className="mainpage__subwrapper">
          <div className="mainpage__lottie" ref={conatiner}></div>
          <div className="mainpage__headingwrapper">
            <p className="mainpage__subheading">
              <Typed
                strings={["Welcome to My Portfolio", "Frontend Developer"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Mainpage;
