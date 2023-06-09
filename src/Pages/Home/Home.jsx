import React from "react";
import Carousel from "./Carousel";
import PopularClassesSection from "./PopularClassesSection";
import InstructorsSection from "./InstructorsSection";
import ExtraSection from "./ExtraSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Melody</title>
      </Helmet>
      <Carousel />
      <PopularClassesSection />
      <InstructorsSection />
      <ExtraSection />
    </div>
  );
};

export default Home;
