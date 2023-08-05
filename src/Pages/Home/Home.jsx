import React from "react";
import Carousel from "./Carousel";
import PopularClassesSection from "./PopularClassesSection";
import InstructorsSection from "./InstructorsSection";
import ExtraSection from "./ExtraSection";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import Services from "./Services";
import SayUs from "./SayUs";
import OtherTopicQue from "./OtherTopicQue";
import Faq from "../../Shared/Faq";
import SubscribeUs from "../../Shared/SubscribeUs";

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
      <Fade>
        <Services />
      </Fade>
      <Fade>
        <SayUs/>
      </Fade>
      <Fade>
        <Faq/>
      </Fade>
      <Fade>
        <OtherTopicQue/>
      </Fade>
      <Fade>
        <SubscribeUs/>
      </Fade>
    </div>
  );
};

export default Home;
