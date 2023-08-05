import Banner from "../../Shared/Banner";
import Faq from "../../Shared/Faq";
import SubscribeUs from "../../Shared/SubscribeUs";
import Form from "./FOrm";
import Text from "./Text";

const Contract = () => {
  return (
    <div>
      <Banner
        title={"Contract Us"}
        description={""}
        imageUrl={
          "https://images.squarespace-cdn.com/content/v1/55fb7137e4b0c8599269158d/1505709580913-D7ZGXRLAAKPIIPL785BS/ALMANSA-guitarra.jpg"
        }
      />
      <Text/>
      <Form/>
      <Faq/>
      <SubscribeUs/>
    </div>
  );
};

export default Contract;
