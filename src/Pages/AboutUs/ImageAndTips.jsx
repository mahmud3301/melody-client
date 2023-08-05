import { BsFillCheckCircleFill } from "react-icons/bs";

const ImageAndTips = () => {
  return (
    <>
      <div className="px-6 md:px-48 mt-24">
        <img
          className="justify-center items-center mx-auto"
          src="https://elementor.din-studio.com/students/wp-content/uploads/sites/6/2021/11/Podcast-Custom-2-1024x651.png"
          alt=""
        />
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 mx-auto justify-center items-center">
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Mutual Support Personnel
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Enjoy and Have Fun
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Professional People
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Flexible Time Work
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Sharing is Caring People
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Team is Number One
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            good manners in ethics
          </h3>
          <h3 className="flex text-xl my-2 font-medium">
            <BsFillCheckCircleFill className="mt-1 mr-6" />
            Alway On Target Task{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default ImageAndTips;
