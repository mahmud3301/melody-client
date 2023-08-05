
import Banner from "../../Shared/Banner";
import Faq from "../../Shared/Faq";
import SubscribeUs from "../../Shared/SubscribeUs";
import Believe from "./Believe";
import Grid from "./Grid";
import ImageAndTips from "./ImageAndTips";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title="About Us"
        imageUrl="https://cf.ltkcdn.net/guitar/images/orig/204548-1700x1129-Guitarist.jpg"
      />
      <Believe/>
      <Grid/>
      <ImageAndTips/>
      <Faq/>
      <SubscribeUs/>
    </div>
  );
};

export default AboutUs;
