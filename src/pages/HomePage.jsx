import React from "react";
import Education from "../component/Education";
//import Experience from "../component/Experience";
import Footer from "../component/Footer";
import Mainpage from "../component/Mainpage";
import Proficiency from "../component/Proficiency";
import Projects from "../component/Projects";
import Service from "../component/Service";

function HomePage() {
  return (
    <>
      <Mainpage />
      <Service />
      <Proficiency />
      <Education />

      <Projects />
      <Footer />
    </>
  );
}

export default HomePage;
