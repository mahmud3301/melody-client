import React from "react";
import Carousel from "./Carousel";
import PopularClassesSection from "./PopularClassesSection";
import InstructorsSection from "./InstructorsSection";
import ExtraSection from "./ExtraSection";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Melody</title>
      </Helmet>
      <Fade>
        <Carousel />
      </Fade>
      <Fade>
        <PopularClassesSection />
      </Fade>
      <Fade>
        <InstructorsSection />
      </Fade>
      <Fade>
        <ExtraSection />
      </Fade>
    </div>
  );
};

export default Home;
