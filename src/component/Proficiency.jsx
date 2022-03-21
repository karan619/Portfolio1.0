import React, { useEffect, useRef } from "react";
import { Progress } from "reactstrap";
import lottie from "lottie-web";
import "../css/Proficiency.css";
import Resume from "../Data/KARAN_CHAUHAN_FrontEnd.pdf";

const Proficiency = () => {
  const conatiner = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: conatiner.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/build.json"),
    });
  }, []);

  return (
    <>
      <h1 className="proficiency__heading">SKILLS</h1>
      <section className="proficiency__wrapper">
        <div className="proficiency__progressbarwrappper ">
          <div className="text-right proficiency__title">FrontEnd/Design</div>
          <div className="text-center proficiency__number">90%</div>
          <Progress animated className="" value={90} />
          <div className="text-right proficiency__title">Javascript</div>
          <div className="text-center proficiency__number">80%</div>
          <Progress animated value="80" />
          <div className="text-right proficiency__title">BackEnd</div>
          <div className="text-center proficiency__number">70%</div>
          <Progress animated value="70" />
        </div>
        <div
          className="proficiency__lottie proficinecy__lottiestyle"
          ref={conatiner}
        ></div>
      </section>
      <div className="proficiency__linkwrapper">
        <a
          href={Resume}
          className="proficiency__links"
          rel="noreferrer"
          target="_blank"
        >
          RESUME
        </a>
      </div>
    </>
  );
};

export default Proficiency;
